import React, { useState, useEffect } from "react";
import { makeStyles, Card, Typography, Avatar } from "@material-ui/core";
import { pxToRem, pxToVh, pxToVw } from "./theme";
import { avatarPj } from "../assets/avatarPj.jpg";
import Skeleton from "./component/Skeleton";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: pxToVw(501),

		width: "92%",

		border: `${pxToRem(1)} solid #d0d1d5`,
		borderRadius: pxToRem(3),
		display: "flex",
		flexDirection: "column",
		marginBottom: pxToVh(15),
		padding: pxToRem(12),
		background: "linear-gradient(to right, #000000, #434343)",
		overflow: "hidden",
		boxShadow: "0 0 0.5rem rgba(0, 0, 0, .30)",
	},
	header: {
		display: "flex",
		flexDirection: "row",

		padding: pxToRem(4),
		height: "25%",
	},
	headerText: {
		position: "relative",
		alignItems: "center",
		fontFamily: "Noto Sans JP, sans-serif",
		fontWeight: "bold",
		lineHeight: 1.38,
		color: "#DFD3C3",
		marginBottom: pxToRem(2),
		fontSize: pxToRem(28),
		paddingLeft: "1rem",
		width: "100%",
	},

	subTitleText: {
		fontFamily: "Noto Sans JP, sans-serif",
		fontSize: pxToRem(22),
		color: "#c5c9d1",
	},
	content: {
		clear: "both",
		position: "relative",
		marginBottom: "8px",
		width: "100%",
	},
	contentText: {
		fontFamily: "Roboto, sans-serif",
		fontWeight: "400",
		fontSize: pxToRem(24),
		textAlign: "justify",
		color: "#FFFFFF",
	},
	reference: {
		width: "100%",
		height: pxToVh(290),
		marginTop: "2vh",
		display: "inline-block",
		position: "relative",
	},
	avatar: {
		height: "4rem",
		width: "4rem",
	},
	referenceThumb: {
		display: "block",
		cursor: "pointer",
		width: "100%",
		height: pxToVh(290),
		transition: "color 0.25s",

		"&:before, &:after": {
			border: "2px solid transparent",
			width: 0,
			height: 0,
		},

		"&:before": {
			top: 0,
			left: 0,
		},

		"&:after": {
			bottom: 0,
			right: 0,
		},
	},
	refContent: {
		// border: '0.2rem solid #eee',
		borderTop: "0",
		padding: "1rem 1.2rem 1rem 0rem",
	},
	more: {
		color: "#5DAAE0",
		fontSize: pxToRem(24),
		fontFamily: "Roboto",
		cursor: "pointer",

		marginBottom: "0.1rem",
	},
	parent: {
		opacity: "0.7",
	},
}));

function countWords(str) {
	str = str.replace(/(^\s*)|(\s*$)/gi, "");
	str = str.replace(/[ ]{2,}/gi, " ");
	str = str.replace(/\n /, "\n");
	return str.split(" ").length;
}

function ProjectCard(props) {
	const classes = useStyles();
	const { title, subtitle, avatarImg, bodyContent, bodyImage, technology, link } = props;
	const [moreDisplayed, setmoreDisplayed] = useState(false);

	const showMore = () => {
		setmoreDisplayed(true);
	};
	const showLess = () => {
		setmoreDisplayed(false);
	};
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (loading) {
			setTimeout(() => {
				setLoading(false);
			}, 2500);
		}
	}, [loading]);

	return (
		<Card className={classes.root}>
			<div className={classes.header}>
				{loading ? (
					<Skeleton height={90} width={90} circle />
				) : (
					<Avatar
						alt={title}
						src={avatarImg ? avatarImg : avatarPj}
						className={classes.avatar}
					/>
				)}
				{loading ? (
					<Skeleton height={34} width={185} count={2} />
				) : (
					<Typography className={classes.headerText}>
						{title} <p className={classes.subTitleText}>{subtitle}</p>
					</Typography>
				)}
				{/* <div className={classes.subTitle}>
          <Typography className={classes.subTitleText}>{subtitle}</Typography>
        </div> */}
			</div>

			<div style={{ padding: pxToRem(16) }}>
				{loading ? (
					<Skeleton
						height={28}
						width={485}
						count={2}
						classes={{ parent: classes.parent }}
					/>
				) : (
					<div className={classes.content}>
						{bodyContent && countWords(bodyContent) > 20 && !moreDisplayed ? (
							<>
								<Typography className={classes.contentText}>
									{bodyContent.split(".", 1).concat(".")}
								</Typography>

								<div
									onClick={showMore}
									className={classes.more}
									role="presentation"
								>
									Show more ...
								</div>
							</>
						) : (
							<>
								<Typography className={classes.contentText}>
									{bodyContent}
								</Typography>
								{moreDisplayed === true && (
									<div
										onClick={showLess}
										className={classes.more}
										role="presentation"
									>
										Show Less
									</div>
								)}
							</>
						)}
					</div>
				)}

				<div className={classes.reference}>
					{loading ? (
						<Skeleton height={290} width={560} />
					) : (
						<img
							src={bodyImage}
							alt={title}
							className={classes.referenceThumb}
							onClick={() => window.open(link)}
						/>
					)}
				</div>
				<div className={classes.refContent}>
					{loading ? (
						<Skeleton height={34} width={523} />
					) : (
						<Typography className={classes.contentText}>
							<b style={{ color: "#f84525", fontSize: pxToRem(26) }}>Skill Used: </b>
							{technology}
						</Typography>
					)}
				</div>
			</div>
		</Card>
	);
}

export default ProjectCard;
