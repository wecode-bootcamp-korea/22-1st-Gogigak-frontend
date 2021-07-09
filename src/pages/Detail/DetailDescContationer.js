import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DetailDateDisplay from './DetailDateDisplay';

export class DetailDescContationer extends Component {
  render() {
    return (
      <div className="detail-product-wrap">
        <section className="detail-desc-wrap">
          <article>
            <img src="https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fdescriptions%2Fweb%2Fporkbelly-fresh1.png?alt=media"></img>
          </article>
          <DetailDateDisplay />
          <article>
            <img src="https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fdescriptions%2Fweb%2Fporkbelly-fresh2.png?alt=media" />
          </article>
        </section>
        <section className="detail-review">
          <ul>
            <li className="detail-review-photo-container review-write">
              <div class="detail-review-wrtie-wrap">
                <div className="detail-review-box">
                  <form>
                    <div className="detail-review-info">
                      <label>
                        <input type="text" name="nickName"></input>
                      </label>
                      <div className="detail-review-content-wrap">
                        <textarea></textarea>
                      </div>
                      <div className="detail-review-customer">
                        <p>심익현</p>
                        <p className="count">1회 구매</p>
                        <time dateTime="2021-07-06">2021-07-06</time>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="detail-review-photo-wrap">
                  <div className="img-wrap">
                    <img
                      src="http://placehold.it/235x236"
                      alt="업로드 이미지"
                    />
                  </div>
                  <input type="file" />
                </div>
              </div>
              <div className="detail-review-width-product">
                <div className="product-wrap-num">
                  함께 구매하신 상품<span className="num">(3)</span>
                </div>
                <div className="product-name-num">초신선 돼지고기 x 3</div>
                <div className="btn-wrap">
                  <button>후기 등록</button>
                </div>
              </div>
            </li>
            <li className="detail-review-photo-container">
              <Link to="#!">
                <div className="detail-review-box">
                  <div className="detail-review-info">
                    <h6>맛있어요~~</h6>
                    <div className="detail-review-content-wrap">
                      <p>잘 먹었습니당...</p>
                    </div>
                    <div className="detail-review-customer">
                      <p>심익현</p>
                      <p className="count">1회 구매</p>
                      <time dateTime="2021-07-06">2021-07-06</time>
                    </div>
                  </div>
                  <div className="detail-review-photo-wrap">
                    <img src="https://firebasestorage.googleapis.com/v0/b/jyg-custom.appspot.com/o/reviews%2F20210706_004726_dM3DZtguSt6BzAff9yc3s6_3abba3fe-f54e-4f3c-920d-01b1347e5c84.jpg?alt=media&token=e5753d84-9958-4837-9481-9337d288b3aa" />
                  </div>
                </div>
                <div className="detail-review-width-product">
                  <div className="product-wrap-num">
                    함께 구매하신 상품<span className="num">(3)</span>
                  </div>
                  <div className="product-name-num">초신선 돼지고기 x 3</div>
                </div>
              </Link>
            </li>
            <li className="detail-review-container">
              <Link to="#!">
                <div className="detail-review-box">
                  <div className="detail-review-info">
                    <h6>맛있어요~~</h6>
                    <div className="detail-review-content-wrap">
                      <p>잘 먹었습니당...</p>
                    </div>
                    <div className="detail-review-customer">
                      <p>심익현</p>
                      <p className="count">1회 구매</p>
                      <time dateTime="2021-07-06">2021-07-06</time>
                    </div>
                  </div>
                </div>
                <div className="detail-review-width-product">
                  <div className="product-wrap-num">
                    함께 구매하신 상품<span className="num">(3)</span>
                  </div>
                  <div className="product-name-num">초신선 돼지고기 x 3</div>
                </div>
              </Link>
            </li>
          </ul>
          <button className="detail-review-more"></button>
        </section>
        <section className="detail-info"></section>
      </div>
    );
  }
}

export default DetailDescContationer;
