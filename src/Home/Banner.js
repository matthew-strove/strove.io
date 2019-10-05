import React, { useState, useCallback } from 'react'
import QueueAnim from 'rc-queue-anim'
import styled, { keyframes, css } from 'styled-components'
import { useSelector } from 'react-redux'
import Modal from 'react-modal'
import { Icon } from 'antd'
import { isMobileOnly, isMobile } from 'react-device-detect'

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

const LeftSection = styled(SectionWrapper)`
  margin-top: ${props => (props.isMobile ? '30vh' : '0')};
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
  flex-direction: ${props => (props.mobile ? 'column' : 'row')};
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-around;
`

const Video = styled.video`
  height: ${props => (props.isMobile ? '67vw' : '26vw')};
  width: ${props => (props.isMobile ? '90vw' : '35vw')};
  margin-top: ${props => (props.isMobile ? '5vh' : '0')};
`

const StyledA = styled.a`
  margin: 0;
  text-decoration: none;
  color: inherit;
  font-size: 1.3rem;
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

const TextWell = styled.div`
  color: black;
  height: auto;
  width: ${isMobile ? '100vw' : '40vw'};
  margin: 0vw 7.5vw 0 7.5vw;
  padding: 3vh;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: left;
  text-justify: inter-word;
  background-color: white;
`

const Paragraph = styled.p`
  text-indent: 30px;
  font-size: 16px;
  display: inline-block;
  padding-top: 0;
`

const Header = styled.h3`
  font-size: 22;
  display: inline-block;
`

const Banner = () => {
  const isLoading = useSelector(selectors.api.getLoading('user'))
  const [isModalVisible, setModalVisible] = useState(false)

  const closeModal = () => setModalVisible(false)

  return (
    <>
      <div className="banner-wrapper">
        <SectionDivider isMobile={isMobile}>
          <LeftSection
            isMobile={isMobile}
            style={!isMobile ? { marginTop: '30vh' } : {}}
          >
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
                Say goodbye to hours of setting up environment.
              </h4>
              <h4 key="content">Code in seconds in Docker on any device.</h4>
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

                <Button mobile={isMobileOnly}>
                  <StyledA href="mailto:contact@codengo.page?subject=Strove demo&body=We'd love to get to know how we can help!%0D%0A%0D%0AWhen is it a good time to schedule a call?">
                    Request a demo
                  </StyledA>
                </Button>
              </ButtonsWrapper>
            </QueueAnim>
          </LeftSection>
          <SectionWrapper>
            <Video isMobile={isMobile} controls>
              <source src={Demo} type="video/mp4"></source>
            </Video>
            <TextWell>
              <Header>Why Strove?</Header>
              <Paragraph>
                Strove.io solves 3 problems programmers face: 1. Programmers
                waste a lot of time on setting up the environment - this problem
                is very troublesome for many teams and has been our initial
                inspiration to start working on this project. Strove.io can cut
                the time to set a programming environment to seconds. 2. It is
                hard to use different computers when working on a project and
                code breaks across different devices and operating systems. In
                Strove.io the code lives in a cloud. This makes it possible to
                resume working on a project from any computer with internet
                access. 3. 'It works on my machine' problem. Strove.io lets
                programmers use their favorite devices without sacrificing
                productivity. All team members access instances of the same
                programming environment, no matter if they use Macbook or an old
                PC.
              </Paragraph>
            </TextWell>
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
