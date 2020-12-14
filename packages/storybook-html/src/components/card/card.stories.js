// import styles
import './card.scss';

// import HTML template strings
import cardsHTML from './card.html';

// import documentation
import docs from './card.docs.mdx';

export default {
  title: 'Components/Cards',
  parameters: {
    layout: "padded",
    docs: {
      page: docs
    },
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const all = () => {
  return cardsHTML;
};

export const cardType1 = () => {
  return `
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <a class="card__primary-link" href="https://campuses.uq.edu.au/st-lucia">
          <div class="entity entity-paragraphs-item paragraphs-item-card-custom card--square view-mode-card_overlay card card--background-image" style="background-image: url('https://campuses.uq.edu.au/files/9492/stlucia-card.jpg')">
            <div class="card__header"></div>
            <div class="card__body">
              <div class="card__content">
                <div class="card__title">
                  <div class="field field-name-field-uq-card-title field-type-text field-label-hidden">
                    <div class="field-items">
                      <div class="field-item even">St Lucia</div>
                    </div>
                  </div>
                </div>
                <div class="card__summary"></div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <a class="card__primary-link" href="https://campuses.uq.edu.au/gatton">
          <div class="entity entity-paragraphs-item paragraphs-item-card-custom card--square view-mode-card_overlay card card--background-image" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')">
            <div class="card__header"></div>
            <div class="card__body">
              <div class="card__content">
                <div class="card__title">
                  <div class="field field-name-field-uq-card-title field-type-text field-label-hidden">
                    <div class="field-items">
                      <div class="field-item even">Gatton</div>
                    </div>
                  </div>
                </div>
                <div class="card__summary"></div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <a class="card__primary-link" href="https://campuses.uq.edu.au/herston">
          <div class="entity entity-paragraphs-item paragraphs-item-card-custom card--square view-mode-card_overlay card card--background-image" style="background-image: url('https://campuses.uq.edu.au/files/9480/herston-card.jpg')">
            <div class="card__header"></div>
            <div class="card__body">
              <div class="card__content">
                <div class="card__title">
                  <div class="field field-name-field-uq-card-title field-type-text field-label-hidden">
                    <div class="field-items">
                      <div class="field-item even">Herston</div>
                    </div>
                  </div>
                </div>
                <div class="card__summary"></div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  `;
};

export const cardType2 = () => {
  return `
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <div class="card">
          <div class="card__header"></div>
          <div class="card__body">
            <a class="card__link" href="#">
              <div class="card__image-container" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')"></div>
            </a>
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date">Sunday 16 August, 2015</div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
              <div class="card__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </div>
            </div>
          </div>
          <div class="card__footer"></div>
        </div>
      </div>
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <div class="card">
          <div class="card__header"></div>
          <div class="card__body">
            <a class="card__link" href="#">
              <div class="card__image-container" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')"></div>
            </a>
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date">Sunday 16 August, 2015</div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
              <div class="card__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </div>
            </div>
          </div>
          <div class="card__footer"></div>
        </div>
      </div>
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <div class="card">
          <div class="card__header"></div>
          <div class="card__body">
            <a class="card__link" href="#">
              <div class="card__image-container" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')"></div>
            </a>
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date">Sunday 16 August, 2015</div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
              <div class="card__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </div>
            </div>
          </div>
          <div class="card__footer"></div>
        </div>
      </div>
    </div>
  `;
};

export const cardType3 = () => {
  return `
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <div class="card">
          <div class="card__header"></div>
          <div class="card__body">
            <a class="card__link" href="#">
              <div class="card__image-container" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')"></div>
            </a>
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date">Sunday 16 August, 2015</div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
              <div class="card__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </div>
            </div>
          </div>
          <div class="card__footer">
            <div class="uq-grid">
              <div class="uq-grid__col uq-grid__col--3">
                <a class="card__link" href="#">Action link A</a>
              </div>
              <div class="uq-grid__col uq-grid__col--3">
                <a class="card__link" href="#">Action link B</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <div class="card">
          <div class="card__header"></div>
          <div class="card__body">
            <a class="card__link" href="#">
              <div class="card__image-container" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')"></div>
            </a>
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date">Sunday 16 August, 2015</div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
              <div class="card__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </div>
            </div>
          </div>
          <div class="card__footer">
            <div class="uq-grid">
              <div class="uq-grid__col uq-grid__col--3">
                <a class="card__link" href="#">Action link A</a>
              </div>
              <div class="uq-grid__col uq-grid__col--3">
                <a class="card__link" href="#">Action link B</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <div class="card">
          <div class="card__header"></div>
          <div class="card__body">
            <a class="card__link" href="#">
              <div class="card__image-container" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')"></div>
            </a>
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date">Sunday 16 August, 2015</div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
              <div class="card__summary">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </div>
            </div>
          </div>
          <div class="card__footer">
            <div class="uq-grid">
              <div class="uq-grid__col uq-grid__col--3">
                <a class="card__link" href="#">Action link A</a>
              </div>
              <div class="uq-grid__col uq-grid__col--3">
                <a class="card__link" href="#">Action link B</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const cardType4 = () => {
  return `
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <div class="card card--background-image card--square" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')">
          <div class="card__header"></div>
          <div class="card__body">
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date">
                <a class="card__link" href="#">Sunday 16 August, 2015</a>
              </div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
            </div>
          </div>
          <div class="card__footer"></div>
        </div>
      </div>
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <div class="card card--background-image card--square" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')">
          <div class="card__header"></div>
          <div class="card__body">
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date">
                <a class="card__link" href="#">Sunday 16 August, 2015</a>
              </div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
            </div>
          </div>
          <div class="card__footer"></div>
        </div>
      </div>
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <div class="card card--background-image card--square" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')">
          <div class="card__header"></div>
          <div class="card__body">
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date">
                <a class="card__link" href="#">Sunday 16 August, 2015</a>
              </div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
            </div>
          </div>
          <div class="card__footer">
            <a class="card__link" href="#">Action link</a>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const cardType5 = () => {
  return `
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <div class="card card--background-image card--square" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')">
          <div class="card__header"></div>
          <div class="card__body">
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date">
                <a class="card__link" href="#">Sunday 16 August, 2015</a>
              </div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
            </div>
          </div>
          <div class="card__footer"></div>
        </div>
      </div>
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <div class="card card--background-image card--square" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')">
          <div class="card__header"></div>
          <div class="card__body">
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date">
                <a class="card__link" href="#">Sunday 16 August, 2015</a>
              </div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
            </div>
          </div>
          <div class="card__footer"></div>
        </div>
      </div>
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 uq-grid__col--xl-4">
        <div class="card card--background-image card--square" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')">
          <div class="card__header"></div>
          <div class="card__body">
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date">
                <a class="card__link" href="#">Sunday 16 August, 2015</a>
              </div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
            </div>
          </div>
          <div class="card__footer">
            <a class="card__link" href="#">Action link</a>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const cardType6 = () => {
  return `
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--6">
        <div class="card card--background-image card--portrait" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')">
          <div class="card__header"></div>
          <div class="card__body">
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date">
                <a class="card__link" href="#">Sunday 16 August, 2015</a>
              </div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const cardType7 = () => {
  return `
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--6">
        <div class="card card--background-image card--landscape" style="background-image: url('https://campuses.uq.edu.au/files/9749/gatton-card2.jpg')">
          <div class="card__header"></div>
          <div class="card__body">
            <div class="card__content">
              <h2 class="card__title">
                <a class="card__link" href="#">Title of item</a>
              </h2>
              <div class="card__date">
                <a class="card__link" href="#">Sunday 16 August, 2015</a>
              </div>
              <div class="card__location">
                <a class="card__link" href="#">Gatton campus</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const cardType8 = () => {
  return `
    <div class="uq-grid card card--horizontal">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 card__header">
        <a class="card__link" href="#">
          <div class="card__image-container">
            <img class="card__image" src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg" />
          </div>
        </a>
      </div>
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 card__body">
        <div class="card__content">
          <h2 class="card__title">
            <a class="card__link" href="#">Title of item</a>
          </h2>
          <div class="card__date">Sunday 16 August, 2015</div>
        </div>
      </div>
    </div>
  `;
};

export const cardType9 = () => {
  return `
    <div class="uq-grid card card--horizontal card--shaded">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 card__header">
        <a class="card__link" href="#">
          <div class="card__image-container">
            <img class="card__image" src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg"/>
          </div>
        </a>
      </div>
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 card__body">
        <div class="card__content">
          <h2 class="card__title">
            <a class="card__link" href="#">Title of item</a>
          </h2>
          <div class="card__date">Sunday 16 August, 2015</div>
        </div>
      </div>
    </div>
  `;
};

export const cardType10 = () => {
  return `
    <div class="uq-grid card card--horizontal card--media-right">
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 card__header">
        <a class="card__link" href="#">
          <div class="card__image-container">
            <img class="card__image" src="https://campuses.uq.edu.au/files/9749/gatton-card2.jpg"/>
          </div>
        </a>
      </div>
      <div class="uq-grid__col uq-grid__col--6 uq-grid__col--md-4 card__body">
        <div class="card__content">
          <h2 class="card__title">
            <a class="card__link" href="#">Title of item</a>
          </h2>
          <div class="card__date">Sunday 16 August, 2015</div>
        </div>
      </div>
    </div>
  `;
};
