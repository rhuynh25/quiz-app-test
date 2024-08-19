import React from 'react'
import { render, fireEvent} from '@testing-library/react'
import About from './About'

describe('About Page', () => {
  // Test 1: Verify that the About page title is rendered correctly
  it('renders the About page title', () => {
    const { getByText } = render(<About />)
    expect(getByText('About Us')).toBeInTheDocument()
  })

  // Test 2: Verify that the About page content is rendered correctly
  it('renders the About page content', () => {
    const { getByText } = render(<About />)
    expect(getByText('This is the about page content')).toBeInTheDocument()
  })

  // Test 3: Verify that the Contact Us button is rendered correctly
  it('renders the Contact Us button', () => {
    const { getByText } = render(<About />)
    expect(getByText('Contact Us')).toBeInTheDocument()
  })

  // Test 4: Verify that the onClick handler is called when the Contact Us button is clicked
  it('calls onClick handler when Contact Us button is clicked', () => {
    const onClickHandler = jest.fn()
    const { getByText } = render(<About onClick={onClickHandler} />)
    const button = getByText('Contact Us')
    fireEvent.click(button)
    expect(onClickHandler).toHaveBeenCalledTimes(1)
  })
})