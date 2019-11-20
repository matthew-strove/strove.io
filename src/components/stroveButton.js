import React, { memo } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { isMobileOnly } from 'react-device-detect'
import { useSelector } from 'react-redux'

import { theme } from 'constants'
import { FullScreenLoader } from 'components'
import { selectors } from 'state'

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

const Button = styled.button`
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  font-weight: bold;
  line-height: normal;
  letter-spacing: 0.8px;
  height: ${props => props.height};
  min-width: 70px;
  width: ${props => props.width};
  display: flex;
  flex-direction: row;
  margin: 5px;
  padding: 10px 30px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ primary, theme }) =>
    primary ? theme.colors.c2 : theme.colors.c1};
  background-color: ${({ primary, theme }) =>
    primary ? theme.colors.c1 : theme.colors.c2};
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.c1};
  box-shadow: 0 1vh 1vh -1.5vh ${({ theme }) => theme.colors.c1};
  text-decoration: none;
  transition: all 0.2s ease;
  animation: ${FadeIn} 0, 5s ease-out;
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
        box-shadow: 0 1.2vh 1.2vh -1.3vh ${({ theme }) => theme.colors.c1};
        transform: translateY(-1px);
      }
    `}
`

const SubmitButton = styled.button`

width: 156px;
    height: 56px;
    color: ${({ theme }) => theme.colors.c2};
    background: ${({ theme }) => theme.colors.c1};
    text-transform: uppercase;
    display: block;
    text-align: center;
    padding: 0;
    border: 0;
    font-size: 14px;
    font-weight: bold;
    line-height: normal;
    letter-spacing: 0.8px;
    transition: opacity 0.2s;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    outline: none;

    ${({ isMobile }) =>
      isMobile &&
      css`
        box-shadow: 0 2px 4px 0 rgba(174, 174, 186, 0.24),
          0 8px 24px 0 rgba(174, 174, 186, 0.16);
        border-radius: 5px;
        width: 100%;
        margin-top: 10px;
      `}

    ${props =>
      !props.disabled
        ? css`
            cursor: pointer;
            &:hover {
              opacity: 1;
              box-shadow: 0 3px 5px 0 rgba(174, 174, 186, 0.24),
                0 9px 26px 0 rgba(174, 174, 186, 0.16);
            }
          `
        : css`
            cursor: not-allowed;
          `}
`

const StroveButton = props => {
  const isLoading = useSelector(selectors.api.getLoading('user'))
  return (
    props.type === 'submit' ?
    <SubmitButton
    primary={props.isPrimary}
    mobile={isMobileOnly}>{isLoading ? (
      <FullScreenLoader
        isFullScreen={false}
        color={'#ffffff'}
        height={'1.7rem'}
      />
    ) : (
      props.text
    )}</SubmitButton>
    :
    <Button
      disabled={isLoading}
      primary={props.isPrimary}
      mobile={isMobileOnly}
      onClick={props.onClick}
      height={props.height}
      width={props.width}
      fontSize={props.fontSize}
    >
      {isLoading ? (
        <FullScreenLoader
          isFullScreen={false}
          color={'#ffffff'}
          height={'1.7rem'}
        />
      ) : (
        props.text
      )}
    </Button>
  )
}

export default memo(StroveButton)
