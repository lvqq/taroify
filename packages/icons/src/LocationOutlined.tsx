import * as React from "react"
import { IconProps } from "./shared"
import { VantIcon } from "./van"

export default function LocationOutlined(props: IconProps) {
  const { ...rest } = props
  return (
    <VantIcon children="location-o" {...rest} />
  )
}
