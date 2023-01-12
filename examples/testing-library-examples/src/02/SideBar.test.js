import { render, screen } from '@testing-library/react'

import SideBar from "./SideBar"

test('should render some links', () => {
  // Arrange
  const links = [
    { href: 'https://www.google.com', title: 'Google' },
    { href: 'https://www.facebook.com', title: 'Facebook' },
    { href: 'https://www.twitter.com', title: 'Twitter' },
  ]

  // Act
  render(<SideBar items={links} />)
  const anchorElements = screen.getAllByRole('link')

  // Assert
  expect(anchorElements).toHaveLength(links.length)
  expect(anchorElements[0]).toHaveAttribute('href', links[0].href)
  expect(anchorElements[0]).toHaveTextContent(links[0].title)
})
