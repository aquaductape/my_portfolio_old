import { WakaData, WakaSchema } from "../../models";
import express from "express";
import { WakaTimeClient } from "wakatime-client";
import config from "config";
import moment from "moment";

const client = new WakaTimeClient(
  process.env.WAKATIME_SECRET || config.get("WakaTime.secret")
);
const route = express.Router();

route.get("/", async (req, res, next) => {
  try {
    const startDate = moment()
      .subtract(14, "days")
      .format("YYYY-MM-DD");

    const endDate = moment().format("YYYY-MM-DD");

    const { data }: { data: any[] } = await client.getMySummary({
      dateRange: {
        startDate,
        endDate
      }
    });

    const schema: WakaSchema = [
      {
        name: "Project",
        type: "string"
      },
      {
        name: "Time",
        type: "date",
        format: "%-m/%-d/%Y"
      },
      {
        name: "Total",
        type: "number"
      }
    ];

    const filteredData: WakaData[] = [];

    data.forEach(item => {
      const {
        depencies,
        editors,
        grand_total,
        languages,
        projects,
        range
      } = item;
      const date = moment(range.date).format("MM/DD/YYYY");

      projects.forEach((project: any, idx: number) => {
        const totalTime = project.total_seconds / 60 / 60;

        if (project.total_seconds >= 1800) {
          filteredData.push([project.name, date, totalTime]);
        }
      });
    });

    res.status(200).json([filteredData, schema]);
  } catch (err) {
    return res.status(500);
  }
});

export const wakaTimeRoute = route;
