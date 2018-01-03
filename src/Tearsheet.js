import React from 'react';

export default class MobileTearSheet extends React.Component {
    getDefaultProps() {
            return {
                height: 500
            };
        }

        render() {

            let styles = {
                root: {
                    float: 'left',
                    marginBottom: 24,
                    marginRight: 24,
                    width: 360

                },

                container: {
                    border: 'solid 1px #d9d9d9',
                    borderBottom: 'none',
                    height: this.props.height,
                    overflow: 'hidden'
                },

                bottomTear: {
                    display: 'block',
                    position: 'relative',
                    marginTop: -10,
                    width: 360
                }
            };

            return (
                <div style={styles.root}>
                    <div style={styles.container}>
                       {this.props.children}
                     </div>
                     <img style={styles.bottomTear} src="./assets/bottom-tear.svg" />
                 </div>
            );
        }

}