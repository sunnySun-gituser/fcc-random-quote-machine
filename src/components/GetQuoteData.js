import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'typeface-roboto'
import RandomQuoteMachine from './RandomQuoteMachine';
import styles from './styles';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const GetQuoteData = (props) => {
    const [quotesData, setQuotesData] = useState([]);
    const [randomIndex, setRandomIndex] = useState(1);
    const [randomQuote, setRandomQuote] = useState({});

    useEffect(() =>{
        const fetchData = async() =>{
            const result = await axios(
                `https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json`
            )
            setQuotesData(result.data);
            console.log(result.data)
            getRandomQuote();
            console.log(randomQuote)
        }
        fetchData();
    }, []);

    const getRandomIndex = () => {
        setRandomIndex(Math.floor(Math.random() * quotesData.length));
        console.log(randomIndex)
    }

    const getRandomQuote = () => {
        getRandomIndex();
        console.log(randomIndex)
        if(!quotesData.length || !Number.isInteger(randomIndex)) return;
        setRandomQuote(quotesData[randomIndex]);
    }

    return !quotesData
        ?   <div><h2>Loading...</h2></div>
        : (
            <Grid id='quote-box' 
                    className={props.classes.container} 
                    justify='center' 
                    container>
                <Grid xs={11} lg={8} item>
                    {quotesData && (
                        <RandomQuoteMachine item={randomQuote} 
                                            index={randomIndex} 
                                            onClick={getRandomQuote}
                                            buttonDisplayName='NEXT QUOTE'/>
                    )}
                </Grid>
            </Grid>);
}
 
export default withStyles(styles)(GetQuoteData);