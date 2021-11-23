import React, { Component } from 'react'
import { 
    withStyles,
} from '@material-ui/core/'
// Material Icons
import IconHome from '@material-ui/icons/HomeOutlined'
import IconTalk from '@material-ui/icons/Chat'
import IconClockwork from '@material-ui/icons/AccessTime'
import IconPingpong from '@material-ui/icons/TouchApp'
import IconOK from '@material-ui/icons/Done'
import IconDelete from '@material-ui/icons/Delete'
import IconChapter from '@material-ui/icons/TouchApp'
import IconTick from '@material-ui/icons/Done'
import IconYouTube from '@material-ui/icons/YouTube'
import IconBug from '@material-ui/icons/BugReport'
import IconReply from '@material-ui/icons/Reply'
import IconAccount from '@material-ui/icons/VerifiedUser'
import IconLightMode from '@material-ui/icons/Brightness5'
import IconDarkMode from '@material-ui/icons/Brightness2'
import IconSend from '@material-ui/icons/Send'
import IconMenu from '@material-ui/icons/Menu'
import IconGitHub from '@material-ui/icons/GitHub'
import IconHttps from '@material-ui/icons/Https'
import IconUnwatch from '@material-ui/icons/VisibilityOff'
import IconWatch from '@material-ui/icons/Visibility'
import IconEdit from '@material-ui/icons/Edit'
import IconSettings from '@material-ui/icons/Settings'
import IconHosts from '@material-ui/icons/Dns'
import IconLink from '@material-ui/icons/Link'
import IconPlugin from '@material-ui/icons/Power'
import IconContent from '@material-ui/icons/InsertDriveFile'
import IconRight from '@material-ui/icons/ArrowForward'
import IconLeft from '@material-ui/icons/ArrowBack'
import IconUp from '@material-ui/icons/ArrowUpward'
import IconDown from '@material-ui/icons/ArrowDownward'
import IconCollapse from '@material-ui/icons/ArrowDownward'
import IconClose from '@material-ui/icons/Close'
import IconExit from '@material-ui/icons/ExitToApp'
import IconTwitter from '@material-ui/icons/Twitter'
import IconFacebook from '@material-ui/icons/Facebook'
import IconLinkedIn from '@material-ui/icons/LinkedIn'
import IconInstagram from '@material-ui/icons/Instagram'
import IconDeveloperMode from '@material-ui/icons/DeveloperMode'
import IconWebsites from '@material-ui/icons/Language'
import IconMoreLikeThis from '@material-ui/icons/ChromeReaderMode'
import IconShare from '@material-ui/icons/Share'
import IconStar from '@material-ui/icons/StarBorder'
import IconNew from '@material-ui/icons/AddOutlined'

const styles = theme => ({
    iconButton: {
        width: 24,
        height: 24,
    },
    white: {
        color: 'white',
    }    
})

class Icon extends Component {

    render() {
        const {
            icon,
            color,
            // classes,
        } = this.props
        let iconColor = `inherit`
        if (color) {
            iconColor = color
        }
        
        switch (icon) {

            case `none`:
                return null
            
            case `websites`:
                return <IconWebsites color={ iconColor } />

            case `share`:
                return <IconShare color={ iconColor } />

            case `morelikethis`:
                return <IconMoreLikeThis color={ iconColor } />

            case `openpwa`:
                return <IconDeveloperMode color={ iconColor } />

            case `delete`:
                return <IconDelete color={ iconColor } />

            case `linkedin`:
                return <IconLinkedIn color={ iconColor } />

            case `instagram`:
                return (<IconInstagram color={ iconColor } />) 

            case `clockwork`:
                return (<IconClockwork color={ iconColor } />) 

            case `star`:
                return (<IconStar color={ iconColor } />) 

            case `facebook`:
                return (<IconFacebook color={ iconColor } />) 

            case `reply`:
                return (<IconReply color={ iconColor } />) 

            case `ok`:
                return (<IconOK color={ iconColor } />) 

            case `twitter`:
                return (<IconTwitter color={ iconColor } />) 

            case `close`:
                return (<IconClose color={ iconColor } />)  

            case `edit`:
                return (<IconEdit color={ iconColor } />)  

            case `lightMode`:
                return (<IconLightMode color={ iconColor } />)  

            case `plugin`:
                return (<IconPlugin color={ iconColor } />)  


            case `left`:
                return (<IconLeft color={ iconColor } />) 

            case `right`:
                return (<IconRight color={ iconColor } />)  

            case `up`:
                return (<IconUp color={ iconColor } />)
            
            case `down`:
                return (<IconDown color={ iconColor } />)

            case `tick`:
                return (<IconTick color={ iconColor } />)

            case `chapter`:
                return (<IconChapter color={ iconColor } />) 

            case `pingpong`:
                return (<IconPingpong color={ iconColor } />)  

            case `darkMode`:
                return (<IconDarkMode color={ iconColor } />)  

            case `new`:
                return (<IconNew color={ iconColor } />)          

            case `settings`:
                return (<IconSettings color={ iconColor } />)  
            
            case `home`:
                return (<IconHome color={ iconColor } />)  

            case `hosts`:
                return (<IconHosts color={ iconColor } />)  

            case `posts`:
                return (<IconContent color={ iconColor } />) 

            case `examples`:
                return (<IconLink color={ iconColor } />) 

            case `link`:
                return (<IconLink color={ iconColor } />) 

            case `content`:
                return (<IconContent color={ iconColor } />)  

            case `exit`:
                return (<IconExit color={ iconColor } />)  

            case `menu`:
                return (<IconMenu color={ iconColor } />)   

            case `collapse`:
                return (<IconCollapse color={ iconColor } />)  

            case `github`:
                return (<IconGitHub color={ iconColor } />)  

            case `locked`:
                return (<IconHttps color={ iconColor } />) 

            case `send`:
                return (<IconSend color={ iconColor } />) 

            case `talk`:
                return (<IconTalk color={ iconColor } />) 

            case `messages`:
                return (<IconTalk color={ iconColor } />) 

            case `youtube`:
                return (<IconYouTube color={ iconColor } />)  

            case `account`:
                return (<IconAccount color={ iconColor } />)  

            case `seen`:
                return (<IconUnwatch color={ iconColor } />) 

            case `unwatch`:
                return (<IconUnwatch color={ iconColor } />) 

            case `watch`:
                return (<IconWatch color={ iconColor } />)  

           case `unseen`:
                return (<IconWatch color={ iconColor } />)              

            case `bug`:
                return (<IconBug color={ iconColor } />)   

            default: {
                return (null)
            }
        }
    }
}

export default (
    withStyles( styles, { withTheme: true })( Icon )
)
