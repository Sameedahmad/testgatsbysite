// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8EX2syfhb19EPFAeuAzYoB
// Component: Mz_be9TGTzdoe
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import LinkButton from "../../LinkButton" // plasmic-import: DZsmJfCyFVvNX-/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen" // plasmic-import: hyBuPfmFqtFxIM/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css" // plasmic-import: 8EX2syfhb19EPFAeuAzYoB/projectcss
import * as sty from "./PlasmicHeader.module.css" // plasmic-import: Mz_be9TGTzdoe/css
import LogoIcon from "./icons/PlasmicIcon__Logo" // plasmic-import: BvIr5sxt0wmv2i/icon

export const PlasmicHeader__VariantProps = new Array()

export const PlasmicHeader__ArgProps = new Array()

function PlasmicHeader__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  })

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(defaultcss.all, sty.link)}
        component={Link}
        href={"/"}
        platform={"gatsby"}
      >
        <LogoIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(defaultcss.all, sty.svg)}
          role={"img"}
        />
      </p.PlasmicLink>

      <p.Stack
        as={"div"}
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box)}
      >
        <LinkButton
          className={classNames("__wab_instance", sty.linkButton__zzmIt)}
          href={"/features"}
          text={"Features"}
          type={"small"}
        />

        <LinkButton
          className={classNames("__wab_instance", sty.linkButton__yJ3We)}
          href={"/pricing"}
          text={"Pricing"}
          type={"small"}
        />

        <LinkButton
          className={classNames("__wab_instance", sty.linkButton__ur1Z)}
          text={"Sign in"}
          type={"small"}
        />

        {(hasVariant(globalVariants, "screen", "mobile") ? false : true) ? (
          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__xZb1)}
            narrower={"narrower"}
            text={"Sign up ->"}
            type={"solidBlack"}
          />
        ) : null}
      </p.Stack>
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root", "link", "svg", "box"],
  link: ["link", "svg"],
  svg: ["svg"],
  box: ["box"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader"
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`
  }
  return func
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    svg: makeNodeComponent("svg"),
    box: makeNodeComponent("box"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps,
  }
)

export default PlasmicHeader
/* prettier-ignore-end */
