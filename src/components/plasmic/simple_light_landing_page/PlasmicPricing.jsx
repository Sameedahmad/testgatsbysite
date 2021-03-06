// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8EX2syfhb19EPFAeuAzYoB
// Component: PxpmwiJN_hpvWV
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import Header from "../../Header" // plasmic-import: Mz_be9TGTzdoe/component
import Section from "../../Section" // plasmic-import: wCmlgszJLunYg/component
import Plan from "../../Plan" // plasmic-import: dJc-b9L1sP2WGy/component
import Bullet from "../../Bullet" // plasmic-import: Yb346u2Ix8Y5jU/component
import LinkButton from "../../LinkButton" // plasmic-import: DZsmJfCyFVvNX-/component
import Faq from "../../Faq" // plasmic-import: YFpHwYd6z-m77Q/component
import Footer from "../../Footer" // plasmic-import: 2jMq6OQbnu_x2/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen" // plasmic-import: hyBuPfmFqtFxIM/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css" // plasmic-import: 8EX2syfhb19EPFAeuAzYoB/projectcss
import * as sty from "./PlasmicPricing.module.css" // plasmic-import: PxpmwiJN_hpvWV/css

export const PlasmicPricing__VariantProps = new Array()

export const PlasmicPricing__ArgProps = new Array()

function PlasmicPricing__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  })

  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__rBGsD)}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <Section
              className={classNames("__wab_instance", sty.section__oNdGe)}
              subtitle={
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
              }
              title={"Pricing"}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__fpH6)}
            >
              <Plan
                className={classNames("__wab_instance", sty.plan__nr3Z)}
                price={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__r6PK
                    )}
                  >
                    {"$10"}
                  </div>
                }
              >
                <LinkButton text={"Get started"} type={"outlineBlue"} />
              </Plan>

              <Plan
                className={classNames("__wab_instance", sty.plan__ty6Nr)}
                description={
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.box___6CX9M)}
                  >
                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__d8DXn
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__qgAg8
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__eooLk
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__kwd2Y
                      )}
                    />
                  </p.Stack>
                }
                name={"Team"}
                price={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box___7LkUx
                    )}
                  >
                    {"$49"}
                  </div>
                }
              >
                <LinkButton text={"Get started"} type={"solidBlue"} />
              </Plan>

              <Plan
                className={classNames("__wab_instance", sty.plan__cfk8K)}
                name={"Enterprise"}
                price={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__dp4V8
                    )}
                  >
                    {"$199"}
                  </div>
                }
              >
                <LinkButton text={"Contact us"} type={"outlineBlue"} />
              </Plan>
            </p.Stack>

            <Section
              className={classNames("__wab_instance", sty.section__bo1Qe)}
              subtitle={
                <React.Fragment>
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__f3XF
                    )}
                  >
                    {
                      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                    }
                  </div>

                  <Faq
                    className={classNames("__wab_instance", sty.faq__tjpZt)}
                    slot={
                      "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                    }
                  >
                    {"Are there long-term contracts?"}
                  </Faq>

                  <Faq
                    className={classNames("__wab_instance", sty.faq___5HA0I)}
                    slot={
                      "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                    }
                  >
                    {"Can I add or remove licenses?"}
                  </Faq>

                  <Faq
                    className={classNames("__wab_instance", sty.faq__wbkNw)}
                    slot={
                      "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                    }
                  >
                    {"Do you offer refunds?"}
                  </Faq>
                </React.Fragment>
              }
              title={"FAQ"}
            />

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  )
}

const PlasmicDescendants = {
  root: ["root", "header", "footer"],
  header: ["header"],
  footer: ["footer"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPricing__ArgProps,
      internalVariantPropNames: PlasmicPricing__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicPricing__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicPricing"
  } else {
    func.displayName = `PlasmicPricing.${nodeName}`
  }
  return func
}

export const PlasmicPricing = Object.assign(
  // Top-level PlasmicPricing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicPricing
    internalVariantProps: PlasmicPricing__VariantProps,
    internalArgProps: PlasmicPricing__ArgProps,
  }
)

export default PlasmicPricing
/* prettier-ignore-end */
