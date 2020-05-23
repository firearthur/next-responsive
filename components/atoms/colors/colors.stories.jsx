import React from 'react';
import { map } from 'lodash';
import colors from './index';

const styles = {
  container: {
    marginBottom: '30px',
  },
  colorTile: {
    height: '50px',
    width: '100px',
    borderRadius: '10px',
  },
  title: {
    margin: 0,
  },
};

export const Colors = () => (
  <>
    {
      map(colors, ({ main }, groupName) => (
        <div style={styles.container}>
          <div style={{ background: main, ...styles.colorTile }} />
          <h3 style={styles.title}>{groupName}</h3>
        </div>
      ))
    }
  </>
);

export default { title: 'Colors' };
