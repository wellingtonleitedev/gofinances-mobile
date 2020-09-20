import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const formatDate = (date: number): string => {
  const value = new Date(date);

  return Intl.DateTimeFormat('pt-BR').format(value);
};

export const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );
