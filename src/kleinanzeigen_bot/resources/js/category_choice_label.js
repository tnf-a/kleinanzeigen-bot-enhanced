// SPDX-FileCopyrightText: © Jens Bergmann and contributors
// SPDX-License-Identifier: AGPL-3.0-or-later
// SPDX-ArtifactOfProjectHomePage: https://github.com/Second-Hand-Friends/kleinanzeigen-bot/
// @ts-check

(
  /**
   * Return the name of a category dialog choice without screen-reader suffixes and icons.
   *
   * The dialog renders e.g. `<button><span aria-hidden="true"><svg/></span><span>Nintendo</span><svg/>
   * <span class="sr-only">, öffnet Unterkategorien</span></button>`; selection-based text extraction
   * returns only the suffix there.
   *
   * @param {Element} elem choice button
   * @returns {string}
   */
  function (elem) {
    const copy = /** @type {Element} */ (elem.cloneNode(true));
    for (const hidden of copy.querySelectorAll(".sr-only, [aria-hidden='true'], svg")) {
      hidden.remove();
    }
    return (copy.textContent || "").replace(/\s+/g, " ").trim();
  }
);
