import styled from "styled-components"

export var Container = styled.div`
    h1 {
        text-align: center;
        margin:  4rem 0;
    }

    li{
        display: flex;
        flex-direction: column;
        align-items: center; 
    }

    img{
        width: 180px;
        border-radius: 16px;
        margin-bottom: 2rem;
    }

    span{
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }


    a{
        transition: all 0.3s;

    }
    a:hover{
        transform: scale(1.1);
    }
`

export var MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax( 200px,1fr));
    column-gap: 3rem;
    row-gap: 4rem;

`

export var Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    
    img{
        width: 180px;
        border-radius: 16px;
        margin-bottom: 2rem;
    }

    span{
        font-weight: bold;
        font-size: 120%;
    }


    a{
        transition: all 0.3s;

    }
    a:hover{
        transform: scale(1.1);
    }
`