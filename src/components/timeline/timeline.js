import React, { Component } from 'react';
import "./timeline.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class TimeLine extends Component {

    render() {

        let data = this.props.data

        const protocol = "http://";
        const content = data.map((item, index) => <div key={item.id} data-testid="timeline-item">

            {item.id % 2 !== 0 &&
                <div className="column-left ">
                    <div className="col-card-left">
                        <div className="col-card-title col-card-title-left">{item.title}</div>
                        <div className="col-card-subtitle col-card-subtitle-left">{item.subtitle}</div>
                        <div className="col-card-para">
                            {item.para}
                        </div>
                        <a className="numberCircle" href={protocol+ item.url} target="_blank">{item.url}</a>
                    </div>
                </div>
            }
            {item.id % 2 !== 0 &&
                <div className="column-right" >
                    <div className="col-note col-note-right">
                        <p>{item.note}</p>
                    </div>
                </div>
            }

            <div className="column-center" >
            {item.id % 2 !== 0 &&
                    <div className="triangle-left"></div>
                }
                {item.id % 2 === 0 &&
                    <div className="triangle-right"></div>
                }
                <div className="line"></div>
                <div className="circle">
                    <FontAwesomeIcon className="icon" icon={['fab', item.icon]} />
                </div>
            </div>

            {item.id % 2 === 0 &&
                <div className="column-right" >
                    <div className="col-card-right">
                        <div className="col-card-title col-card-title-right">{item.title}</div>
                        <div className="col-card-subtitle col-card-subtitle-right">{item.subtitle}</div>
                        <div className="col-card-para">
                            {item.para}
                        </div>
                        <a className="numberCircle" href={protocol+ item.url} target="_blank">{item.url}</a>                         
                    </div>
                </div>
            }
            {item.id % 2 === 0 &&
                <div className="column-left" >
                    <div className="col-note col-note-left">
                        <p>{item.note}</p>
                    </div>
                </div>
            }
            <div className="clearfix"></div>
        </div>
        );

        return (
            <div className="timeline" data-testid="timeline_id">
                {content}
            </div>)
    }

}

export default TimeLine;