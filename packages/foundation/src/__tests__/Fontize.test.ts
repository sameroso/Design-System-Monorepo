import Fontsize from "../FontSize";
test("snapshot of fontSizes", () => {
  expect(Fontsize).toMatchSnapshot();
});
