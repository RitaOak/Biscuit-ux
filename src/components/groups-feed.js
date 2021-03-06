import { html, LitElement } from 'lit-element';
import sharedStyles from '../../style/app.scss';
import newsFeedComponentStyle from '../../style/news-feed.scss';
import './tags.js';

class groupsFeed extends LitElement {
  static get styles() {
    return [sharedStyles, newsFeedComponentStyle];
  }

  render() {
    return html`
      <div class="box box-feed">
        <div class="content news-feed">
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                <div class="column is-flex news-feed-nav">
                  <figure class="image avatar-news-feed">
                    <img class="is-rounded avatar-news-feed" src="https://bulma.io/images/placeholders/128x128.png" />
                  </figure>
                  <section>
                    <h4>
                      <a> Rita Carvalho</a>
                      uploaded a file
                      <span class="panel-icon">
                        <i class="fas fa-book" aria-hidden="true"></i>
                      </span>
                    </h4>
                    <p>
                      23 March 2017
                    </p>
                  </section>
                </div>
              </div>
            </div>
            <div class="level-right">
              <p class="level-item"><a class="button is-info">Pin</a></p>
            </div>
          </nav>
          <section class="column news-feed-message">
            <h4>
              Group assignment briefing
            </h4>
            <p>
              Here is the briefing for that group assignment we talked about.
            </p>
            <tags-button></tags-button>
            <tags-button></tags-button>
          </section>
          <hr class="news-feed-break" />
          <nav class="level bottom-nav-news">
            <div class="level-left">
              <div class="level-item">
                <a class="button is-inverted is-link">
                  <span>View (25) comments</span>
                  <span class="icon is-small">
                    <i class="mdi mdi-alert"></i>
                  </span>
                </a>
              </div>
            </div>
            <div class="level-right is-pulled-right">
              <div class="level-item">
                <p>
                  reply
                </p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    `;
  }
}

window.customElements.define('groups-feed', groupsFeed);
