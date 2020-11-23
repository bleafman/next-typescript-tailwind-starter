import React, { ReactElement } from 'react'

interface Props {}

export default function Welcome({}: Props): ReactElement {
  return <h1 className="text-green-600">Welcome to your app</h1>
}
