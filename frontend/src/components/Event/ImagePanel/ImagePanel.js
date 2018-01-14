import React from "react";

export class ImagePanel extends React.Component {

    constructor() {
        super();
        this.state = {data: false};
    }

    componentDidMount() {
        const { images } = this.props;

        images.then(result => {
            this.setState({ data: result.data.images });
        });
    }
    

    render () {
        
        if(this.state.data) {

            var items = [];
        
            this.state.data.map(image => {
                items.push(<img key={image.id} width="100" src={'data:'+image.mimeType+';base64,'+Buffer.from(image.blob).toString('utf8')} />);
            })           
            
            return <div>{items}</div>;
                     
        } else {

            return (
                <div>Načítání</div>
            );

        }

    }

}