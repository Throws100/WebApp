// eagerly import theme styles so as we can override them
import '@vaadin/vaadin-lumo-styles/all-imports';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `
<custom-style>
  <style>

html {
  --lumo-font-size: 1rem;
  --lumo-font-size-xxxl: 1.75rem;
  --lumo-font-size-xxl: 1.375rem;
  --lumo-font-size-xl: 1.125rem;
  --lumo-font-size-l: 1rem;
  --lumo-font-size-m: 0.875rem;
  --lumo-font-size-s: 0.8125rem;
  --lumo-font-size-xs: 0.75rem;
  --lumo-font-size-xxs: 0.6875rem;
  --lumo-line-height-m: 1.4;
  --lumo-line-height-s: 1.2;
  --lumo-line-height-xs: 1.1;
  --lumo-border-radius: 0.75em;
  --lumo-size-xl: 2.5rem;
  --lumo-size-l: 2rem;
  --lumo-size-m: 1.75rem;
  --lumo-size-s: 1.5rem;
  --lumo-size-xs: 1.25rem;
  --lumo-space-xl: 1.875rem;
  --lumo-space-l: 1.25rem;
  --lumo-space-m: 0.625rem;
  --lumo-space-s: 0.3125rem;
  --lumo-space-xs: 0.1875rem;
}

[theme~="dark"] {
}

  </style>
</custom-style>


<dom-module id="button-style" theme-for="vaadin-button">
  <template>
    <style>:host(:not([theme~="tertiary"])){background-image:linear-gradient(var(--lumo-tint-5pct), var(--lumo-shade-5pct));box-shadow:inset 0 0 0 1px var(--lumo-contrast-20pct);}:host(:not([theme~="tertiary"]):not([theme~="primary"]):not([theme~="error"]):not([theme~="success"])){color:var(--lumo-body-text-color);}:host([theme~="primary"]){text-shadow:0 -1px 0 var(--lumo-shade-20pct);}
    </style>
  </template>
</dom-module>

`;

document.head.appendChild($_documentContainer.content);

