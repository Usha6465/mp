import { Grid } from "@mui/material";
import React from "react";
import styles from "../Navbar/navbar.module.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Component1() {
  return (
    <Grid
      className={styles.comp1}
      container
      spacing={2}
      sx={{ marginTop: "30px" }}
    >
      <Grid item sm="12" md="4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="image1.jpg" alt="img" style={{ borderRadius: '10px' }} />
        <div className={styles.adiv}>
          <a className={styles.comp1link} href="">
            Make New Friends{" "}
          </a>
          <ArrowRightAltIcon
            sx={{ fontSize: "33px", color: "#008294" }}
            size="large"
          />
        </div>
      </Grid>

      <Grid item sm="12" md="4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="image2.jpg" alt="img" style={{ borderRadius: '10px' }} />
        <div className={styles.adiv}>
          <a className={styles.comp1link} href="">
            Explore the outdoors{" "}
          </a>
          <ArrowRightAltIcon
            sx={{ fontSize: "33px", color: "#008294" }}
            size="large"
          />
        </div>
      </Grid>

      <Grid item sm="12" md="4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="image3.jpg" alt="img" style={{ borderRadius: '10px' }} />
        <div className={styles.adiv}>
          <a className={styles.comp1link} href="">
            Connect over tech{" "}
          </a>
          <ArrowRightAltIcon
            sx={{ fontSize: "33px", color: "#008294" }}
            size="large"
          />
        </div>
      </Grid>
    </Grid>
  );
}
