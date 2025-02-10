const { I } = inject();

When("I visit the North Highland Homepage", (val) => {
  I.amOnPage("https://www.northhighland.com/");
});
