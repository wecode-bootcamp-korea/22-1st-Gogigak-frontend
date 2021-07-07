import React from 'react';
import DaumPostcode from 'react-daum-postcode';

import './Address.scss';

class Address extends React.Component {
  state = {
    isPost: false,
  };
  handleComplete = data => {
    let fullAddress = data.address;

    console.log(fullAddress);
  };

  handlePost = () => {
    this.setState({
      isPost: !this.state.isPost,
    });
  };
  postCodeStyle = {
    position: 'absolute',
    width: '770px',
    height: '400px',
    top: 0,
    left: 0,
    zIndex: '20',
    padding: '7px',
  };
  render() {
    return (
      <>
        <section className="delivery">
          <img
            className="deliveryImg"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuugiOydtOyWtF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjU4LjcgMTcxLjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1OC43IDE3MS42OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MXtjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyk7fQoJLnN0MntjbGlwLXBhdGg6dXJsKCNTVkdJRF80Xyk7ZmlsbDojRkZGRkZGO30KCS5zdDN7Y2xpcC1wYXRoOnVybCgjU1ZHSURfNl8pO30KCS5zdDR7Y2xpcC1wYXRoOnVybCgjU1ZHSURfOF8pO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Q1e2NsaXAtcGF0aDp1cmwoI1NWR0lEXzEwXyk7fQoJLnN0NntjbGlwLXBhdGg6dXJsKCNTVkdJRF8xMl8pO2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnPgoJPGc+CgkJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjIxOS44IiB5MT0iMzIiIHgyPSIyNDQuNSIgeTI9IjE5LjYiLz4KCQk8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjIwLjciIHkxPSIxOC40IiB4Mj0iMjQ0LjMiIHkyPSIzMi45Ii8+CgkJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjIzMy45IiB5MT0iMTEuOSIgeDI9IjIzMS4xIiB5Mj0iMzkuNCIvPgoJCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxNDYuOCIgeTE9IjEwNiIgeDI9IjE2MC4xIiB5Mj0iOTkuNCIvPgoJCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxNDcuMyIgeTE9Ijk4LjciIHgyPSIxNjAiIHkyPSIxMDYuNSIvPgoJCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxNTQuNCIgeTE9Ijk1LjIiIHgyPSIxNTIuOCIgeTI9IjExMCIvPgoJCQoJCQk8cmVjdCB4PSI4OS44IiB5PSI0OC4zIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjg5NCAtMC40NDgxIDAuNDQ4MSAwLjg5NCAtMjcuOTgxMyA3MS4wODc5KSIgY2xhc3M9InN0MCIgd2lkdGg9IjkyLjgiIGhlaWdodD0iOTIuOCIvPgoJCTxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjE5OS4xLDExNS4xIDI1Ni43LDg2LjIgMjQxLjksNTYuNyAyMTAsMzcuNiAxNzAuMiw1Ny41IAkJIi8+Cgk8L2c+Cgk8Zz4KCQk8ZGVmcz4KCQkJPHBhdGggaWQ9IlNWR0lEXzFfIiBkPSJNMTcwLjIsMTI2LjhjNCw3LjksMC44LDE3LjUtNy4xLDIxLjRjLTcuOSw0LTE3LjUsMC44LTIxLjQtNy4xYy00LTcuOS0wLjgtMTcuNSw3LjEtMjEuNAoJCQkJQzE1Ni42LDExNS43LDE2Ni4yLDExOC45LDE3MC4yLDEyNi44Ii8+CgkJPC9kZWZzPgoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMl8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgoJCTwvY2xpcFBhdGg+CgkJPGcgY2xhc3M9InN0MSI+CgkJCTxkZWZzPgoJCQkJPHJlY3QgaWQ9IlNWR0lEXzNfIiB4PSItMTI3NiIgeT0iLTE0NDkiIHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjI3NTYiLz4KCQkJPC9kZWZzPgoJCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzRfIj4KCQkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzNfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CgkJCTwvY2xpcFBhdGg+CgkJCTxyZWN0IHg9IjEzNC45IiB5PSIxMTIuOSIgY2xhc3M9InN0MiIgd2lkdGg9IjQyIiBoZWlnaHQ9IjQyIi8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoMC44OTQgLTAuNDQ4MSAwLjQ0ODEgMC44OTQgLTQzLjQ3NDUgODQuMDU0KSIgY2xhc3M9InN0MCIgY3g9IjE1NS45IiBjeT0iMTMzLjkiIHJ4PSIxNiIgcnk9IjE2Ii8+Cgk8L2c+Cgk8Zz4KCQk8ZGVmcz4KCQkJPHBhdGggaWQ9IlNWR0lEXzVfIiBkPSJNMjQxLDkxLjNjNCw3LjksMC44LDE3LjUtNy4xLDIxLjRjLTcuOSw0LTE3LjUsMC44LTIxLjQtNy4xYy00LTcuOS0wLjgtMTcuNSw3LjEtMjEuNAoJCQkJQzIyNy41LDgwLjIsMjM3LjEsODMuNCwyNDEsOTEuMyIvPgoJCTwvZGVmcz4KCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzZfIj4KCQkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfNV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4KCQk8L2NsaXBQYXRoPgoJCTxnIGNsYXNzPSJzdDMiPgoJCQk8ZGVmcz4KCQkJCTxyZWN0IGlkPSJTVkdJRF83XyIgeD0iLTEyNzYiIHk9Ii0xNDQ5IiB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIyNzU2Ii8+CgkJCTwvZGVmcz4KCQkJPGNsaXBQYXRoIGlkPSJTVkdJRF84XyI+CgkJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF83XyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgoJCQk8L2NsaXBQYXRoPgoJCQk8cmVjdCB4PSIyMDUuOCIgeT0iNzcuNCIgY2xhc3M9InN0NCIgd2lkdGg9IjQyIiBoZWlnaHQ9IjQyIi8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGVsbGlwc2UgdHJhbnNmb3JtPSJtYXRyaXgoMC44OTQgLTAuNDQ4MSAwLjQ0ODEgMC44OTQgLTIwLjA1OTQgMTEyLjAzMTEpIiBjbGFzcz0ic3QwIiBjeD0iMjI2LjciIGN5PSI5OC40IiByeD0iMTYiIHJ5PSIxNiIvPgoJPC9nPgoJPGc+CgkJPGRlZnM+CgkJCTxsaW5lIGlkPSJTVkdJRF85XyIgeDE9IjExNS42IiB5MT0iMTU3IiB4Mj0iMTU2LjkiIHkyPSIzMi40Ii8+CgkJPC9kZWZzPgoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMTBfIj4KCQkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfOV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4KCQk8L2NsaXBQYXRoPgoJCTxnIGNsYXNzPSJzdDUiPgoJCQk8ZGVmcz4KCQkJCTxyZWN0IGlkPSJTVkdJRF8xMV8iIHg9Ii0xMjc2IiB5PSItMTQ0OSIgd2lkdGg9IjE5MjAiIGhlaWdodD0iMjc1NiIvPgoJCQk8L2RlZnM+CgkJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMTJfIj4KCQkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzExXyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgoJCQk8L2NsaXBQYXRoPgoJCQk8cmVjdCB4PSIxMTAuNiIgeT0iMjcuNCIgY2xhc3M9InN0NiIgd2lkdGg9IjUxLjQiIGhlaWdodD0iMTM0LjYiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8bGluZSBjbGFzcz0ic3QwIiB4MT0iMTE1LjYiIHkxPSIxNTciIHgyPSIxNTYuOSIgeTI9IjMyLjQiLz4KCQk8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIxODIuNCw1Mi4xIDE5Ni42LDgwLjQgMjMyLjUsNjIuNCAyMjQuNiw0Ni41IAkJIi8+CgkJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjQ1LjQiIHkxPSIxNDYuMiIgeDI9IjEwOC42IiB5Mj0iMTE0LjUiLz4KCQk8bGluZSBjbGFzcz0ic3QwIiB4MT0iNTcuNSIgeTE9IjExOC42IiB4Mj0iNjMuMiIgeTI9IjExNS43Ii8+CgkJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjIiIHkxPSIxNjguNCIgeDI9IjcuOCIgeTI9IjE2NS41Ii8+CgkJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjcyLjIiIHkxPSIxMTEuMyIgeDI9IjEwMi4yIiB5Mj0iOTYuMiIvPgoJCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxMy41IiB5MT0iMTYyLjIiIHgyPSIzOC4zIiB5Mj0iMTQ5LjgiLz4KCQk8bGluZSBjbGFzcz0ic3QwIiB4MT0iMTQuNCIgeTE9IjE0OC42IiB4Mj0iMzgiIHkyPSIxNjMuMSIvPgoJCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSIyNy43IiB5MT0iMTQyIiB4Mj0iMjQuOCIgeTI9IjE2OS42Ii8+CgkJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjEzLjUiIHkxPSIxNjIuMiIgeDI9IjM4LjMiIHkyPSIxNDkuOCIvPgoJCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxNC40IiB5MT0iMTQ4LjYiIHgyPSIzOCIgeTI9IjE2My4xIi8+CgkJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjI3LjciIHkxPSIxNDIiIHgyPSIyNC44IiB5Mj0iMTY5LjYiLz4KCQk8bGluZSBjbGFzcz0ic3QwIiB4MT0iMTY4LjgiIHkxPSIxMDMuMSIgeDI9IjE5Ny40IiB5Mj0iODguNyIvPgoJCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxNjQiIHkxPSI5Ny4zIiB4Mj0iMTg3LjUiIHkyPSI4NS41Ii8+CgkJPGxpbmUgY2xhc3M9InN0MCIgeDE9IjEyNCIgeTE9IjIyLjEiIHgyPSIxNDguNyIgeTI9IjkuNyIvPgoJCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxMjQuOSIgeTE9IjguNSIgeDI9IjE0OC41IiB5Mj0iMjMiLz4KCQk8bGluZSBjbGFzcz0ic3QwIiB4MT0iMTM4LjEiIHkxPSIyIiB4Mj0iMTM1LjMiIHkyPSIyOS42Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="
            alt="img"
          />
          <h3 className="title">신선배송</h3>
          <p className="subTitle">
            가장 빠르게 초신선을 만나는 법, 정육각의 ‘신선배송’을 소개합니다.
          </p>
          <div className="delievery_desc">
            <p>
              가장 빠르게 초신선을 만나는 법, 정육각의 ‘신선배송’을 소개합니다.
              <br />
              전날 저녁 계획한 아침식사를 도와 줄 새벽배송, <br />
              전국 어디든 하루만에 도착하는 우체국배송까지. <br />
              신선함을 먹는 습관을 위한 최적의 배송 서비스를 경험해보세요!
            </p>
          </div>

          <h3 className="searchText">
            정육각 <span className="text-highlight">신선배송 지역</span>은 계속
            <span className="text-highlight">확대</span> 중!
            <br /> 지금 우리 집에는 어떤 배송이 오는지 확인해보세요.
          </h3>
          <div className="searchContainer">
            <div className="searchbox" onClick={this.handlePost}>
              <div className="searchWhite">
                <p className="searchText">주소를 입력해주세요.</p>
              </div>
              <div className="searchBtn">
                <i class="fas fa-search"></i>
              </div>
              {this.state.isPost ? (
                <DaumPostcode
                  onComplete={this.handleComplete}
                  style={this.postCodeStyle}
                  autoClose
                />
              ) : null}
            </div>
            <div className="searchResult">
              <p>
                고객님은 <span className="text-bold">당일배송</span>,
                <span className="text-bold">새벽배송</span>으로
                <br /> 받아보실 수 있습니다.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Address;
