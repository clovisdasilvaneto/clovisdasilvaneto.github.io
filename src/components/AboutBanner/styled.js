import styled from "@emotion/styled"

export const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  flex-direction: column;

  ${({ theme }) => theme.media.desktop`
    flex-direction: row;
  `}
`

export const AboutText = styled.h3`
  color: ${({ theme }) => theme.colors.light};
  font-weight: 300;

  order: 2;
  text-align: center;
  font-size: 1.6rem;
  line-height: 2rem;
  margin-top: 16px;

  ${({ theme }) => theme.media.desktop`
    line-height: 3rem;
    font-size: 2rem;
    order: 1;
    text-align: left;
  `}
`

export const AboutImage = styled.img`
  border-radius: 100%;
  order: 1;
  margin-bottom: 0;
  max-width: 200px;

  ${({ theme }) => theme.media.desktop`
    margin-bottom: -60px;
    max-width: 100%;
  `}
`
