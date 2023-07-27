import styled from "@emotion/styled";

export const SplitScreenWrapper = styled.div`
    display: flex;
`;

export const TasksListWrapper = styled.div`
    background-color: #2c3957;
    height: 100vh;
    flex: 1;
    min-width: 250px;
    overflow-y: scroll;
    text-align: center;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Titles = styled.h4`
    color: #F66403;
`;

export const TasksDetailstWrapper = styled.div`
    background-color: #f2f2f2;
    height: 100vh;
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AddTaskWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const MyUl = styled.ul`
    margin-top: 1rem;
    display: grid;
    gap: 10px;
`;

export const MyLi = styled.li`
    color:white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

export const ButtonWrapper = styled.button`
    color: #F66403;
    cursor: pointer;
    border: none;
    background-color: transparent;
`;

export const MyInput = styled.input`
    text-indent: 5px;
    color: white;
    border: transparent;
    border-bottom: 1px solid #F66403;
    letter-spacing: 0.5px;
    background-color: transparent;
    outline: none;
    &::placeholder {
        color: white
    }
`;

export const Card = styled.div`
    background-color: white;
    box-shadow: 0 8px 16px grey;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
`;

export const MyP = styled.p`
    display: block;
    padding: 20px;
`;

export const ItemButtonsWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
`;