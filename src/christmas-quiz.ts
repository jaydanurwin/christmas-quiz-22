import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { questions } from "./quiz";
import "./canvas-snow";

@customElement("christmas-quiz")
export class ChristmasQuiz extends LitElement {
  static styles = [
    css`
      :host {
        --step--2: clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem);
        --step--1: clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem);
        --step-0: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);
        --step-1: clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem);
        --step-2: clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem);
        --step-3: clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem);
        --step-4: clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem);
        --step-5: clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem);
        display: block;
      }
      .quiz {
        width: 100%;
        margin: 0 auto;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1rem;
        padding: 1rem;
        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.65);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(7.6px);
        -webkit-backdrop-filter: blur(7.6px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 1rem;
      }
      h2 {
        margin: 0;
        font-size: var(--step-2);
        line-height: 1.5;
      }
      p {
        margin: 0;
        font-size: var(--step-1);
      }
      .options {
        width: 200px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      button {
        padding: 1rem;
        border: none;
        border-radius: 0.25rem;
        background-color: #42532c;
        border: 3px solid #576f35;
        color: #fff;
        font-size: var(--step-1);
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .options button {
        padding: 1.5rem 1rem;
        font-size: 1rem; 
        width: 100%;
      }
      .options button:hover {
        background-color: #576f35;
      }
      @media (hover: none) {
        .options button {
          background-color: #42532c;
        }
      }
    `,
  ];

  @state()
  private questions = questions;

  @state()
  private currentQuestion = 0;

  @state()
  private score = 0;

  @state()
  private _quizEnded = false;

  render() {
    const currentQuestion = this.questions[this.currentQuestion];
    return html`
      <div class="quiz">
        ${
      this._quizEnded
        ? html`
          <h2 class="score">
            ${
          this.score === this.questions.length
            ? html`<canvas-snow></canvas-snow> You got them all right! 🎉`
            : `You scored ${this.score} out of ${this.questions.length}`
        }
          </h2>
          <button @click=${() => this.reset()} class="restart__btn">
            Restart Quiz
          </button>
        `
        : html`
        <p class="counter">
          Question ${this.currentQuestion + 1} of ${this.questions.length}
        </p>
        <h2 class="question">
          ${currentQuestion.question}
        </h2>
        <div class="options">
          ${
          currentQuestion.options.map((option) =>
            html`
            <button @click=${() => this.checkAnswer(option)}>
              ${option}
            </button>
          `
          )
        }
        </div>`
    }
      </div>
    `;
  }

  private checkAnswer(option: string) {
    const currentQuestion = this.questions[this.currentQuestion];
    // do nothing if the answer is already selected
    if (this._quizEnded) {
      return;
    }
    if (option === currentQuestion.answer) {
      this.score++;
    }
    if (this.currentQuestion + 1 < this.questions.length) {
      this.currentQuestion++;
    } else {
      this._quizEnded = true;
    }
  }

  private reset() {
    this.currentQuestion = 0;
    this.score = 0;
    this._quizEnded = false;
  }
}
