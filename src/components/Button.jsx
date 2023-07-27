import { ButtonWrapper } from "../styles";

export const Button = ({ children, ...props }) => {
    return(
        <ButtonWrapper {...props} >
            {children}
        </ButtonWrapper>
    );
};