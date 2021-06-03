describe("page", () => {
  it("test", function () {
    cy.visit("/", {
      onLoad(win) {
        win.indexedDB.deleteDatabase("TC-_global_"); // Clearing this just for the sake of this example flow
      },
      timeout: 360000,
    })

      .get('[data-qa-id="btnUrlOpen"]')
      .should("be.visible")
      .click()

      .get('[data-qa-id="btnUrlSave"]')
      .should("be.visible")

      .get('[data-qa-id="txtUrl"] input')
      .should("be.visible")
      .clear()
      .type("@pragueat.test.tyrecheck.com" + "{enter}")

      .get('[data-qa-id="btnUrlSave"]')
      .click()

      .get('[data-qa-id="btnUrlSave"]')
      .should("not.exist")

      .get('[data-qa-id="txtUsername"] input')
      .clear()
      .type("pragueatspat14@mailinator.com")

      .get('[data-qa-id="txtPassword"] input')
      .clear()
      .type("@A123xyqs789@325wf")

      .get('[data-qa-id="btnLoginSubmit"]')
      .click()

      .get('[data-qa-id="pageSearchLanding"]', { timeout: 360000 })
      .should("be.visible")

      .wait(2000)

      .location()
      .its("href", { timeout: 2000 })
      .should("equal", "https://prague.test.tyrecheck.com/incenter2/#/");
  });
});
