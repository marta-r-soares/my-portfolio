
import-{-createTheme,-responsiveFontSizes-}-from-'@mui/material/styles';

let-theme-=-createTheme({
----typography:-{
--------fontFamily:-[
------------'"Helvetica-Neue"',
--------].join(','),
----},
----palette:-{
--------primary:-{
------------main:-'#04051d',
--------},
--------secondary:-{
------------main:-'#48f154',
--------},
----},
});
theme-=-responsiveFontSizes(theme);

export-default-theme;