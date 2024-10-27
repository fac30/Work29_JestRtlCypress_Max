import { render as testingLibraryRender } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";

function render(ui, options = {}) {
  return testingLibraryRender(ui, {
    wrapper: ({ children }) => (
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    ),
    ...options,
  });
}

export default render;

export * from "@testing-library/react";
