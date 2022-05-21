import React from 'react';
import styled from 'styled-components';
import {SwiperContainer} from "../../components/Swiper";

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 100%;
  margin: 54px 0 54px;
`

const fablesMock = [
    {
        title: 'Новые сказки',
        name: 'Отель',
        image: 'https://picsum.photos/163/184',
        price: '9999'
    },
    {
        title: 'Новые сказки',
        name: 'Отель',
        image: 'https://picsum.photos/163/184',
        price: '9999'
    },
    {
        title: 'Новые сказки',
        name: 'Отель',
        image: 'https://picsum.photos/163/184',
        price: '9999'
    },
    {
        title: 'Новые сказки',
        name: 'Отель',
        image: 'https://picsum.photos/163/184',
        price: '9999'
    },
]

function Fables() {
    return (
        <ColumnWrapper>
            {fablesMock.map(fable => {
                return <SwiperContainer key={fable.name} />
            })}
        </ColumnWrapper>
    );
}

export default Fables;
