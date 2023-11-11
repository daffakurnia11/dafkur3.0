import IcoMoon from "react-icomoon";
import type { IconProps } from "react-icomoon";
import React from "react";
import iconSet from "@/icons/selection.json";

/**
 * Icon Component
 * @param props.icon For declaring the icon name based on selection.json name
 * @param props.size For configurating the size of the icon (optional)
 * @param props.title For giving the title of the icon (optional)
 * @param props.style For adding the inline CSS in the icon
 * @returns Icon Component
 */
export default function Icon(props: IconProps): React.JSX.Element {
  return <IcoMoon iconSet={iconSet} {...props} />;
}
