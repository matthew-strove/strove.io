import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import getOr from 'lodash/fp/getOr'

import Layout from 'components/layout'
import Loader from 'components/fullScreenLoader.js'
import { selectors } from 'state'
import SEO from 'components/seo'
import { C } from 'state'
import { CONTINUE_PROJECT } from 'queries'
import { mutation } from 'utils'
const StyledIframe = styled.iframe`
  display: block;
  background: #000;
  border: none;
  min-height: 97vh;
  width: 100vw;
  margin: 0;
`

const getMachineId = getOr(undefined, ['currentProject', 'machineId'])
const getUserToken = selectors.api.getApiData('user', null, 'siliskyToken')
const getId = getOr(undefined, ['currentProject', 'id'])
const getCurrentProjectId = (getUserToken = selectors.api.getApiData(
  'user',
  null,
  'currentProjectId'
))
const getPort = getOr(undefined, ['currentProject', 'editorPort'])

const Editor = () => {
  const dispatch = useDispatch()
  const token = useSelector(getUserToken)
  const projectId = useSelector(getId)
  const machineId = useSelector(getMachineId)
  const currentProjectId = useSelector(getCurrentProjectId)
  const port = useSelector(getPort)
  const [loaderVisible, setLoaderVisible] = useState(true)

  useEffect(() => {
    // This condition means project has been stopped
    if (projectId !== currentProjectId) {
      dispatch(
        mutation({
          name: 'continueProject',
          mutation: CONTINUE_PROJECT,
          variables: { projectId },
          onSuccessDispatch: [
            ({ id, editorPort }) => ({
              type: C.currentProject.SELECT_CURRENT_PROJECT,
              payload: { id, editorPort },
            }),
          ],
        })
      )
    }
  }, [projectId])

  useEffect(() => {
    window.addEventListener('beforeunload', ev => {
      ev.preventDefault()
      dispatch({
        type: C.currentProject.STOP_CURRENT_PROJECT,
      })

      if (navigator && navigator.sendBeacon) {
        navigator.sendBeacon(
          `${process.env.SILISKY_ENDPOINT}/beacon`,
          JSON.stringify({ token, projectId, type: 'stopProject' })
        )
      }
    })
  }, [])

  // Let api know that project is still active so api doesn't stop it
  useEffect(() => {
    const projectPing = setInterval(() => {
      dispatch(
        mutation({
          name: 'continueProject',
          mutation: CONTINUE_PROJECT,
          variables: { projectId },
        })
      )
    }, 60000)

    return () => clearInterval(projectPing)
  }, [])

  return (
    <Layout>
      <SEO title="Editor" />
      {loaderVisible && <Loader isFullScreen={true} color="#0072ce" />}
      <StyledIframe
        onLoad={useCallback(() => setLoaderVisible(false))}
        src={`${process.env.SILISKY_ENDPOINT}/editor?token=${token}&id=${machineId}&port=${port}`}
        style={{ opacity: loaderVisible ? 0 : 1 }}
      />
    </Layout>
  )
}

export default Editor
