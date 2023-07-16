import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Carousel,
    Container,
    Nav,
    Form,
    FormControl,
    Button,
    Figure,
    Row,
    Col,
    InputGroup,
    Navbar,
    NavDropdown,
    Offcanvas,
} from 'react-bootstrap'; //부트스트랩 사용을 위한 임포트
import '../../../src/index.css'; //폰트설정을 위한 css 임포트
import { FaSearch } from 'react-icons/fa'; //아이콘을 삽입을 위한 임포트
//사진을 넣기 위한 임포트..
import logo from '../../assets/mainHeader-assets/logo.png';
import map from '../../assets/mainHeader-assets/map.png';
import search from '../../assets/mainHeader-assets/search.png';
import uirimji from '../../assets/mainHeader-assets/Uirimji.png';
import Bakdaljae from '../../assets/mainHeader-assets/Bakdaljae.png';
import WoraksanMountain from '../../assets/mainHeader-assets/WoraksanMountain.png';
import CheongpungCultural from '../../assets/mainHeader-assets/CheongpungCultural.png';
import GeumsusanMountain from '../../assets/mainHeader-assets/Geumsusan Mountain.png';
import YonghagugokValley from '../../assets/mainHeader-assets/Yonghagugok Valley.png';
import SonggyeValley from '../../assets/mainHeader-assets/Songgye Valley.png';
import OksunbongPeak from '../../assets/mainHeader-assets/Oksunbong Peak.png';
import TaksajeongPavilion from '../../assets/mainHeader-assets/Taksajeong Pavilion.png';
import BaeronHolyGround from '../../assets/mainHeader-assets/Baeron Holy Ground.png';

import { LOAD_ALL_POSTS_REQUEST } from '../../reducers/post';
import { useDispatch, useSelector } from 'react-redux';

// src 속 뜨지 않던 holder.js -> https://via.placeholder.com/이미지규격 으로 변경시 전부 정상으로 뜸
// react.svg 사용하지 않았기에 삭제

function MainHeader() {
    const [showMenu, setShowMenu] = useState(false); // 마우스 호버 상태를 저장하는 상태값

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = 'rgba(24, 242, 12, 0.5)'; //마우스 호버시 배경 색을 초록색으로 설정
        // setHover(true);
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = ''; //마우스가 떠나면 원래 배경을 돌아옴
        // setHover(false);
    };

    const { mainPosts } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        if (mainPosts.length === 0) {
            dispatch({
                type: LOAD_ALL_POSTS_REQUEST,
            });
        }
    }, []);

    const handleToggleMenu = (e) => {
        setShowMenu(!showMenu);
    };

    return (
        // header - 러브투어 로고, 검색 지도 아이콘
        <>
            <Container>
                <Row>
                    <Col xs={12} sm={4} className="d-flex align-items-center justify-content-center">
                        <Figure
                            style={{
                                marginTop: '10px',
                                marginBottom: '0px',
                            }}
                        >
                            <a href="/">
                                <Figure.Image width={300} height={50} src={logo} alt="logo" />
                            </a>
                        </Figure>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex align-items-center justify-content-center">
                        <InputGroup
                            style={{
                                backgroundColor: '#F0F0F0',
                                borderRadius: '10px',
                                //border: '1px solid #ccc',
                            }}
                        >
                            <FormControl
                                type="text"
                                placeholder="제천 전통시장 러브투어에 대해 검색하세요!"
                                aria-label="Search"
                                style={{}}
                            />
                            <Button variant="outline-light">
                                <FaSearch style={{ color: 'black' }} />
                            </Button>
                        </InputGroup>
                    </Col>
                    <Col xs={12} sm={2} className="d-flex align-items-center justify-content-center">
                        <Figure
                            className="text-center"
                            style={{
                                marginTop: '25px',
                                marginBottom: '0px',
                            }}
                        >
                            <a href="#">
                                <Figure.Image
                                    width={30}
                                    height={30}
                                    src={map}
                                    alt="map"
                                    style={{ visibility: 'hidden' }}
                                />
                            </a>
                            <Figure.Caption
                                className="text-dark"
                                style={{ fontSize: '12px', fontWeight: 'bold', visibility: 'hidden' }}
                            >
                                지도로 보기
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
            </Container>
            {/* 메뉴 */}
            <Container>
                <Nav
                    activeKey="/"
                    onMouseEnter={() => setShowMenu(true)} // 네비게이션에 마우스를 올렸을 때 상태값 변경
                    onMouseLeave={() => setShowMenu(false)} // 네비게이션에서 마우스를 내렸을 때 상태값 변경
                >
                    <Row
                        style={{
                            width: '100%', //넓이
                            zIndex: '20', //앞으로 보내기
                            position: 'absolute',
                            marginLeft: 0, // 왼쪽 패딩 0으로 설정
                            marginRight: 0, // 오른쪽 패딩 0으로 설정
                            background: 'rgba(17, 17, 17, 0.6)', //배경색
                            fontFamily: 'SUITE-Regular', // 폰트 스타일 지정
                        }}
                    >
                        <Col
                            xs={3}
                            style={{
                                fontSize: '20px',
                                // display: 'flex',
                                paddingLeft: 0, // 왼쪽 패딩 0으로 설정
                                paddingRight: 0, // 오른쪽 패딩 0으로 설정
                            }}
                        >
                            <Nav.Item as="li">
                                <Nav.Link
                                    href="/"
                                    style={{
                                        //backgroundColor: hover ? 'green' : 'white',
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: '22px',
                                        //width: '250px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: 'white',
                                    }}
                                >
                                    제천 러브투어
                                </Nav.Link>

                                {showMenu && ( // 마우스 호버 상태일 때만 하위 리스트 보이기
                                    <li
                                        style={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/introduce"
                                            style={{
                                                color: 'white',
                                            }}
                                        >
                                            러브투어 소개
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/supportBenefit"
                                            style={{
                                                color: 'white',
                                            }}
                                        >
                                            지원 혜택
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/gallery"
                                            style={{ color: 'white' }}
                                        >
                                            사진 갤러리
                                        </Nav.Link>
                                    </li>
                                )}
                            </Nav.Item>
                        </Col>

                        <Col
                            xs={3}
                            style={{
                                fontSize: '20px',
                                //display: 'flex',
                                justifyContent: 'center',
                                paddingLeft: 0, // 왼쪽 패딩 0으로 설정
                                paddingRight: 0, // 오른쪽 패딩 0으로 설정
                            }}
                        >
                            <Nav.Item as="li">
                                <Nav.Link
                                    href="/board/touristSpot"
                                    style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: '22px',
                                        //width: '274px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: 'white',
                                    }}
                                >
                                    제천의 이모저모
                                </Nav.Link>
                                {showMenu && (
                                    <li
                                        style={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/touristSpot"
                                            style={{
                                                color: 'white',
                                            }}
                                        >
                                            관광지
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/traditionalMarket"
                                            style={{
                                                color: 'white',
                                            }}
                                        >
                                            전통시장
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/food"
                                            style={{ color: 'white' }}
                                        >
                                            음식
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/accommodation"
                                            style={{ color: 'white' }}
                                        >
                                            숙박
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/festival"
                                            style={{ color: 'white' }}
                                        >
                                            축제/행사
                                        </Nav.Link>
                                    </li>
                                )}
                            </Nav.Item>
                        </Col>

                        <Col
                            xs={3}
                            style={{
                                fontSize: '20px',
                                //display: 'flex',
                                justifyContent: 'center',
                                paddingLeft: 0, // 왼쪽 패딩 0으로 설정
                                paddingRight: 0, // 오른쪽 패딩 0으로 설정
                            }}
                        >
                            <Nav.Item as="li">
                                <Nav.Link
                                    href="/board/oksunbongPeakCourse"
                                    style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: '22px',
                                        //width: '274px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                        background: 'white',
                                    }}
                                >
                                    테마/코스
                                </Nav.Link>
                                {showMenu && (
                                    <li
                                        style={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/oksunbongPeakCourse"
                                            style={{ color: 'white' }}
                                        >
                                            옥순봉 코스
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/cheongpunghoCourse"
                                            style={{ color: 'white' }}
                                        >
                                            청풍호 코스
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/museumCourse"
                                            style={{ color: 'white' }}
                                        >
                                            박물관 코스
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/shrineOfBaeronCourse"
                                            style={{ color: 'white' }}
                                        >
                                            배론성지 코스
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/healingCourse"
                                            style={{ color: 'white' }}
                                        >
                                            힐링 코스
                                        </Nav.Link>
                                    </li>
                                )}
                            </Nav.Item>
                        </Col>

                        <Col
                            xs={3}
                            style={{
                                fontSize: '20px',
                                //display: 'flex',
                                justifyContent: 'center',
                                paddingLeft: 0, // 왼쪽 패딩 0으로 설정
                                paddingRight: 0, // 오른쪽 패딩 0으로 설정
                            }}
                        >
                            <Nav.Item as="li">
                                <Nav.Link
                                    href="/board/announce"
                                    style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: '22px',
                                        //width: '202px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                        background: 'white',
                                    }}
                                >
                                    알림마당
                                </Nav.Link>
                                {showMenu && (
                                    <li
                                        style={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/announce"
                                            style={{ color: 'white' }}
                                        >
                                            공지사항
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/faq"
                                            style={{ color: 'white' }}
                                        >
                                            자주하는 질문
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/review"
                                            style={{ color: 'white' }}
                                        >
                                            투어 후기
                                        </Nav.Link>
                                    </li>
                                )}
                            </Nav.Item>
                        </Col>
                    </Row>
                </Nav>
            </Container>

            {/* <Navbar
                onMouseEnter={() => setShowMenu(true)} // 네비게이션에 마우스를 올렸을 때 상태값 변경
                onMouseLeave={() => setShowMenu(false)} // 네비게이션에서 마우스를 내렸을 때 상태값 변경
                bg="primary"
                expand="lg"
                style={{
                    fontFamily: 'SUITE-Regular', // 폰트 스타일 지정
                }}
            >
                /<Navbar.Brand href="#">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: 0 }}>
                    <Nav
                        style={{
                            width: '100%', //넓이
                            zIndex: '20', //앞으로 보내기
                            // position: 'absolute',
                            background: 'rgba(17, 17, 17, 0.6)', //배경색
                        }}
                    >
                        <Col
                            xs={3}
                            style={{
                                fontSize: '20px',
                                //display: 'flex',
                                paddingLeft: 0, // 왼쪽 패딩 0으로 설정
                                paddingRight: 0, // 오른쪽 패딩 0으로 설정
                            }}
                        >
                            <Nav.Item as="li">
                                <Nav.Link
                                    href="/"
                                    style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: '22px',
                                        // width: '250px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: 'white',
                                    }}
                                >
                                    제천 러브투어
                                </Nav.Link>

                                {showMenu && ( // 마우스 호버 상태일 때만 하위 리스트 보이기
                                    <li
                                        style={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/introduce"
                                            style={{
                                                color: 'white',
                                            }}
                                        >
                                            러브투어 소개
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/supportBenefit"
                                            style={{
                                                color: 'white',
                                            }}
                                        >
                                            지원 혜택
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/gallery"
                                            style={{ color: 'white' }}
                                        >
                                            사진 갤러리
                                        </Nav.Link>
                                    </li>
                                )}
                            </Nav.Item>
                        </Col>

                        <Col
                            xs={3}
                            style={{
                                fontSize: '20px',
                                // display: 'flex',
                                paddingLeft: 0, // 왼쪽 패딩 0으로 설정
                                paddingRight: 0, // 오른쪽 패딩 0으로 설정
                            }}
                        >
                            <Nav.Item as="li">
                                <Nav.Link
                                    href="/board/touristSpot"
                                    style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: '22px',
                                        //width: '274px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: 'white',
                                    }}
                                >
                                    제천의 이모저모
                                </Nav.Link>
                                {showMenu && (
                                    <li
                                        style={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/touristSpot"
                                            style={{
                                                color: 'white',
                                            }}
                                        >
                                            관광지
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/traditionalMarket"
                                            style={{
                                                color: 'white',
                                            }}
                                        >
                                            전통시장
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/food"
                                            style={{ color: 'white' }}
                                        >
                                            음식
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/accommodation"
                                            style={{ color: 'white' }}
                                        >
                                            숙박
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/festival"
                                            style={{ color: 'white' }}
                                        >
                                            축제/행사
                                        </Nav.Link>
                                    </li>
                                )}
                            </Nav.Item>
                        </Col>

                        <Col
                            xs={3}
                            style={{
                                fontSize: '20px',
                                // display: 'flex',
                                paddingLeft: 0, // 왼쪽 패딩 0으로 설정
                                paddingRight: 0, // 오른쪽 패딩 0으로 설정
                            }}
                        >
                            <Nav.Item as="li">
                                <Nav.Link
                                    href="/board/oksunbongPeakCourse"
                                    style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: '22px',
                                        //width: '274px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: 'white',
                                    }}
                                >
                                    테마/코스
                                </Nav.Link>
                                {showMenu && (
                                    <li
                                        style={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/oksunbongPeakCourse"
                                            style={{ color: 'white' }}
                                        >
                                            옥순봉 코스
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/cheongpunghoCourse"
                                            style={{ color: 'white' }}
                                        >
                                            청풍호 코스
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/museumCourse"
                                            style={{ color: 'white' }}
                                        >
                                            박물관 코스
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/shrineOfBaeronCourse"
                                            style={{ color: 'white' }}
                                        >
                                            배론성지 코스
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/healingCourse"
                                            style={{ color: 'white' }}
                                        >
                                            힐링 코스
                                        </Nav.Link>
                                    </li>
                                )}
                            </Nav.Item>
                        </Col>

                        <Col
                            xs={3}
                            style={{
                                fontSize: '20px',
                                // display: 'flex',
                                paddingLeft: 0, // 왼쪽 패딩 0으로 설정
                                paddingRight: 0, // 오른쪽 패딩 0으로 설정
                            }}
                        >
                            <Nav.Item as="li">
                                <Nav.Link
                                    href="/board/announce"
                                    style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: '22px',
                                        //width: '202px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        background: 'white',
                                    }}
                                >
                                    알림마당
                                </Nav.Link>
                                {showMenu && (
                                    <li
                                        style={{
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/announce"
                                            style={{ color: 'white' }}
                                        >
                                            공지사항
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/faq"
                                            style={{ color: 'white' }}
                                        >
                                            자주하는 질문
                                        </Nav.Link>
                                        <Nav.Link
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            href="/board/review"
                                            style={{ color: 'white' }}
                                        >
                                            투어 후기
                                        </Nav.Link>
                                    </li>
                                )}
                            </Nav.Item>
                        </Col>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}

            {/* // 캐러셀 */}
            <Container>
                <Row xs="auto">
                    <Carousel style={{ zIndex: '10', marginTop: '35px' }}>
                        <Carousel.Item>
                            <img className="d-block w-100" width={800} height={400} src={uirimji} alt="First slide" />
                            <Carousel.Caption>
                                <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                                <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                width={800}
                                height={400}
                                src={Bakdaljae}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                                <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                width={800}
                                height={400}
                                src={WoraksanMountain}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                                <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                width={800}
                                height={400}
                                src={CheongpungCultural}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                                <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                width={800}
                                height={400}
                                src={GeumsusanMountain}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                                <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다 .</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                width={800}
                                height={400}
                                src={YonghagugokValley}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                                <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                width={800}
                                height={400}
                                src={SonggyeValley}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                                <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                width={800}
                                height={400}
                                src={OksunbongPeak}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                                <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                width={800}
                                height={400}
                                src={TaksajeongPavilion}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                                <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                width={800}
                                height={400}
                                src={BaeronHolyGround}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>행사 혹은 안내 관련 광고 슬라이드 창입니다</h3>

                                <p>제천 전통시장 러브투어 관련 광고를 올리는 공간입니다.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </>
    );
}

export default MainHeader;
