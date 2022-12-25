import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import confetti from "canvas-confetti"

@customElement("canvas-snow")
export class CanvasSnow extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffffff'],
      shapes: ['circle'],
    });
  }
}
