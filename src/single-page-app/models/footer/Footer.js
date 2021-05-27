import { React, Component } from 'react';

class Footer extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            if(this.props.footerData) {
                this.setState({
                    line1: this.props.footerData.line1,
                    link1: this.props.footerData.link1,
                    linktext1: this.props.footerData.linktext1,

                    line2: this.props.footerData.line2,
                    link2: this.props.footerData.link2,
                    linktext2: this.props.footerData.linktext2,

                    line3: this.props.footerData.line3,
                    link3: this.props.footerData.link3,
                    linktext3: this.props.footerData.linktext3,

                    line4: this.props.footerData.line4,
                    link4: this.props.footerData.link4,
                    linktext4: this.props.footerData.linktext4,
                });
            }
        }
      }

    render() {
        let line1 = '', link1 = '', linktext1 = '';
        let line2 = '', link2 = '', linktext2 = '';
        let line3 = '', link3 = '', linktext3 = '';
        let line4 = '', link4 = '', linktext4 = '';

        if(this.state) {
            line1 = this.state.line1;
            link1 = this.state.link1;
            linktext1 = this.state.linktext1;

            line2 = this.state.line2;
            link2 = this.state.link2;
            linktext2 = this.state.linktext2;

            line3 = this.state.line3;
            link3 = this.state.link3;
            linktext3 = this.state.linktext3;

            line4 = this.state.line4;
            link4 = this.state.link4;
            linktext4 = this.state.linktext4;
        }

        return (
            <p>
                {line1} <a href={link1}>{linktext1}</a>
                {line2} <a href={link2}>{linktext2}</a>
                {line3} <a href={link3}>{linktext3}</a>
                {line4} <a href={link4}>{linktext4}</a>
            </p>
        );
    }
}

export default Footer;