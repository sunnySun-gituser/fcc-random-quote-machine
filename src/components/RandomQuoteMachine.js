import React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from './Button';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import {fontAwesomeIcon, FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'


// href={`https://twitter.com/intent/tweet?text=${props.item.quote}&hashtags=thewebdevcoach`}>

const RandomQuoteMachine = (props) => (
    <Card>
        <CardContent>
            {
                props.item && ((
                    <Typography id='text'>
                        {props.item.quote} - <span id='author'>{props.item.author}</span>
                    </Typography>
            ))}
        </CardContent>
        <CardActions>
            <Button 
                id='new-quote'
                size='small'
                onClick={props.onClick} 
                buttonDisplayName={props.buttonDisplayName} />
            <IconButton id='tweet-quote'
                    href={encodeURI(`https://twitter.com/intent/tweet?text=${props.item.quote}&hashtags=${props.item.author}`)}>
                <FontAwesomeIcon icon={faTwitter} size='md'>
                </FontAwesomeIcon>
            </IconButton>
        </CardActions>
    </Card>
);
 
export default RandomQuoteMachine;