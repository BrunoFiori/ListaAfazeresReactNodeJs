import { makeStyles } from "@material-ui/core";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteIcon from "@material-ui/icons/Delete";

const getButtonEditGrid =
  ({ edit, remove }) =>
  (params) => {
    const useStyles = makeStyles((theme) => ({
      btnEditGrid: {
        color: theme.palette.primary.main,
        border: 0,
        paddingTop: theme.spacing(1),
        backgroundColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          color: "#1e1e1e",
        },
      },
    }));
    const classes = useStyles();
    return (
      <>
        {edit && (
          <button className={classes.btnEditGrid} onClick={() => edit(params)}>
            <EditOutlinedIcon fontSize="small" />
          </button>
        )}
        {remove && (
          <button
            className={classes.btnEditGrid}
            onClick={() => remove(params)}
          >
            <DeleteIcon fontSize="small" />
          </button>
        )}
      </>
    );
  };

export default getButtonEditGrid;
