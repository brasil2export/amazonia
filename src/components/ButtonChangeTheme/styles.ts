import styled from 'styled-components'

export const Container = styled.div`
position: absolute;
z-index: 999;
right: 11%;
top: 4%;
transform: translateY(8%);


    @media (max-width: 1300px) {
        right: 15%;
    }

    @media (max-width: 900px) {
        display: none;
    }

    .switch {
    position: absolute;
    margin-left: -9999px;
    visibility: hidden;
    }

    .switch + label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
    }
    .switch--shadow + label {
    padding: 2px;
    width: 50px;
    height: 22px;
    background-color: #000000;
    border-radius: 60px;
    }

    .switch--shadow + label:before,
    .switch--shadow + label:after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: '';
    }
    .switch--shadow + label:before {
    right: 1px;
    background-color: #f1f1f1;
    border-radius: 60px;
    transition: all 0.4s;
    }
    .switch--shadow + label:after {
    width: 20px;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
    }

    .switch--shadow:checked + label:before {
    background-color: #000000;
    border: 1px solid white
    }
    .switch--shadow:checked + label:after {
    transform: translateX(28px);
    }
`
