import styles from './styles';

const setTextStyle = (textType: string | undefined) => {
  let textStyle: Record<string, unknown>;
  switch (textType) {
    case 'light':
      textStyle = styles.light;
      break;
    case 'regular':
      textStyle = styles.regular;
      break;
    case 'semibold':
      textStyle = styles.semibold;
      break;
    case 'bold':
      textStyle = styles.bold;
      break;
    default:
      textStyle = styles.regular;
      break;
  }

  return textStyle;
};

export default setTextStyle;
