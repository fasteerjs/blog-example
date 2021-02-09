import { TopbarSettings } from "@vottuscode/ts-topbar";
// @ts-ignore
import topbar from "topbar";
// @ts-ignore
import tw from "../../tailwind.config.js";

const { colors } = tw.theme;

export const TOPBAR_SETTINGS: TopbarSettings = {
  barColors: {
    0: colors.indigo["200"],
    0.25: colors.indigo["300"],
    0.5: colors.indigo["400"],
    0.75: colors.indigo["500"],
    1: colors.indigo["600"]
  }
};

export class Topbar {
  constructor(settings: TopbarSettings = TOPBAR_SETTINGS) {
    topbar.config(settings);
  }

  /**
   * Show the topbar
   */
  show(): void {
    return topbar.show();
  }

  /**
   * Hide the topbar
   */
  hide(): void {
    return topbar.hide();
  }

  /**
   * Progress
   *
   * Returns the topbar progress status.
   * Additionally, the status can be changed by passing a number
   * (or a string that can be casted to a number) to the "to" parameter.
   *
   * @param {string | number} to Set progress status
   */
  progress(to?: string | number): number {
    return topbar.progress(to);
  }

  /**
   * Promised Topbar
   *
   * This is useful for eg. data fetching,
   * when this function is called, the topbar appears and
   * hides upon resolving of the promise passed in the "promise" parameter.
   *
   * @param {Promise<any>} promise Promise to toggle Topbar upon
   */
  promised<TPromise extends Promise<unknown> = Promise<unknown>>(
    promise: TPromise
  ): TPromise {
    this.show();
    promise.then(this.hide);
    promise.catch(this.hide);
    return promise;
  }
}

export const bar = new Topbar();
