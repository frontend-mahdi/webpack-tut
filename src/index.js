import { AlertService } from "./app/alert.service";
import { run } from "./app/app";
import { ComponentService } from "./app/component.service";
import "./main.scss";
alert("mahdi");
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);
