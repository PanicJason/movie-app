import { ReactNode } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

interface SectionProps{
    children: ReactNode;
}

const Container = styled.div`
    padding : 40px;
    padding-tpy : 0px;
    padding-bottom : 0;
    margin-top : 15px;
    animation : sectionAni 0.6s ease-in;

    :not(:last-child) {
        margin-bottom : 20px;
    }

    @ketframes sectionAni {
        from {
            transform : translateY(25px);
            opacity : 0;
        }
        to{
            transform : translateY(0px);
            opacity : 1;
        }
    }

    @media (max-width : 768px) {
        padding : 15px;
        margin-top : 0px;
    }
`


const Children = styled.div`
    display : flex;
    justify-content : center;
    flex-direction : row;
    max-width : 2400px;
    flex-wrap : wrap;
    
    @media (max-width : 768px) {
        justify-content : space-between;
    }
`;


const Section : React.FC<SectionProps> = ({children}) =>{
    return (
        <Container>
            <Children>{children}</Children>
        </Container>
    )
}

Section.propTypes ={
    children : PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default Section;