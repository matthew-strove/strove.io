import React, { useState, useCallback } from 'react'
import QueueAnim from 'rc-queue-anim'
import styled, { keyframes, css } from 'styled-components'
import { useSelector } from 'react-redux'
import Modal from 'react-modal'
import { Icon } from 'antd'
import { isMobileOnly, isMobile } from 'react-device-detect'
import isEmail from 'validator/lib/isEmail'
import { Formik, Form, Field } from 'formik'

import { selectors } from 'state'
import FullScreenLoader from 'components/fullScreenLoader'
import GetStarted from 'components/getStarted'
import Demo from '../assets/StroveDemo.mp4'

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const ButtonFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.9;
  }
`

const SectionDivider = styled.div`
  display: flex;
  flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
  height: 100%;
  width: 100%;
`

const SectionWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  display: flex;
  flex-direction: row;
  height: auto;
  width: ${props => (props.mobile ? '90%' : '45%')};
  min-width: 70px;
  margin: 5px;
  padding: 0.5vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${props => (props.primary ? '#0072ce' : '#ffffff')};
  border-width: 1px;
  border-style: solid;
  font-size: 1.3rem;
  color: ${props => (props.primary ? '#ffffff' : '#0072ce')};
  border-radius: 5px;
  border-color: #0072ce;
  box-shadow: 0 1vh 1vh -1.5vh #0072ce;
  text-decoration: none;
  transition: all 0.2s ease;
  animation: ${FadeIn} 0.5s ease-out;
  opacity: 0.9;

  :focus {
    outline: 0;
  }

  &:disabled {
    opacity: 0.4;
  }

  ${props =>
    !props.disabled &&
    css`
      animation: ${ButtonFadeIn} 1s ease-out;
      cursor: pointer;
      &:hover {
        opacity: 1;
        transform: scale(1.1);
      }
    `}
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-around;
`

const EmailFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 400px;
  align-items: center;

  ${Button} {
    height: 50px;
    padding: 0;
    margin: 0;
    border: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

const StyledInput = styled(Field)`
  height: 50px;
  border-radius: 0;
  outline: none;
`

const Video = styled.video`
  height: ${props => (props.isMobile ? '50vw' : '19,6vw')};
  width: ${props => (props.isMobile ? '90vw' : '35vw')};
  margin-top: ${props => (props.isMobile ? '5vh' : '0')};
`

const StyledModal = styled(Modal)`
  display: flex;
  height: auto;
  width: auto;
  position: fixed;
  animation: ${FadeIn} 0.2s ease-out;

  :focus {
    outline: 0;
  }
`

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.7vh;
  color: #0072ce;
  cursor: pointer;

  :focus {
    outline: none;
  }
`

const validate = values => {
  let errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!isEmail(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}

const Banner = () => {
  const isLoading = useSelector(selectors.api.getLoading('user'))
  const [isModalVisible, setModalVisible] = useState(false)

  const closeModal = () => setModalVisible(false)

  return (
    <>
      <div className="banner-wrapper">
        <SectionDivider isMobile={isMobile}>
          <SectionWrapper isMobile={isMobile}>
            <QueueAnim
              className="banner-title-wrapper"
              type={isMobileOnly ? 'bottom' : 'right'}
            >
              <div key="line" className="title-line-wrapper">
                <div
                  className="title-line"
                  style={{ transform: 'translateX(-64px)' }}
                />
              </div>
              <h1 key="h1">Strove</h1>
              <h4 key="content">
                Say goodbye to hours of setting up environment
              </h4>
              <h4 key="content">#1 productivity tool for programmers</h4>
              <ButtonsWrapper mobile={isMobileOnly}>
                <Button
                  primary
                  mobile={isMobileOnly}
                  disabled={isLoading}
                  onClick={useCallback(() => setModalVisible(true))}
                >
                  {isLoading ? (
                    <FullScreenLoader
                      isFullScreen={false}
                      color={'#ffffff'}
                      height={'1.7rem'}
                    />
                  ) : (
                    'Get started'
                  )}
                </Button>

                {/* <Button mobile={isMobileOnly}>
                  <StyledA href="mailto:contact@codengo.page?subject=Strove demo&body=We'd love to get to know how we can help!%0D%0A%0D%0AWhen is it a good time to schedule a call?">
                    Request a demo
                  </StyledA>
                </Button> */}
                <Formik
                  initialValues={{
                    email: '',
                  }}
                  validate={validate}
                  onSubmit={values => {
                    console.log(values)
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <EmailFormWrapper>
                        <StyledInput type="email" name="email" />
                        <Button
                          primary
                          mobile={isMobileOnly}
                          disabled={errors.email && touched.email}
                          onClick={() => {}}
                          type="submit"
                        >
                          Request demo
                        </Button>
                      </EmailFormWrapper>
                    </Form>
                  )}
                </Formik>
              </ButtonsWrapper>
            </QueueAnim>
          </SectionWrapper>
          <SectionWrapper>
            <Video isMobile={isMobile} controls>
              <source src={Demo} type="video/mp4"></source>
            </Video>
          </SectionWrapper>
        </SectionDivider>
      </div>
      <StyledModal
        isOpen={isModalVisible}
        onRequestClose={closeModal}
        ariaHideApp={false}
        isMobile={isMobileOnly}
      >
        {!isMobile && (
          <StyledIcon
            type="close"
            onClick={useCallback(() => setModalVisible(false))}
          />
        )}
        <GetStarted closeModal={closeModal} />
      </StyledModal>
    </>
  )
}

export default Banner
