import { Injectable } from '@angular/core';
import {ChartTooltipModel} from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class FirstChartService {

  constructor() { }

  static customTooltip(tooltipModel: ChartTooltipModel, chart: Chart): void {
    let tooltipEl: HTMLDivElement = document.getElementById('chartjs-tooltip') as HTMLDivElement;
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.id = 'chartjs-tooltip';
      tooltipEl.innerHTML = '<table></table>';
      document.body.appendChild(tooltipEl);
    }
    if (tooltipModel.opacity === 0) {
      tooltipEl.style.opacity = '0';
      return;
    }
    tooltipEl.classList.remove('above', 'below', 'no-transform');
    if (tooltipModel.yAlign) {
      tooltipEl.classList.add(tooltipModel.yAlign);
    } else {
      tooltipEl.classList.add('no-transform');
    }

    // Set Text
    if (tooltipModel.body) {
      const titleLines = tooltipModel.title || [];
      const bodyLines = tooltipModel.body.map(item => item.lines);

      let innerHtml = '<thead>';

      titleLines.forEach((title) => {
        innerHtml += '<tr><th>' + title + '</th></tr>';
      });
      innerHtml += '</thead><tbody>';

      bodyLines.forEach((body) => {
        console.log(body);
        let style = `background: #000`;
        style += '; border-color:#000';
        style += '; border-width: 2px';
        const span = '<span style="' + style + '"></span>';
        innerHtml += '<tr style="background-color: #fff"><td>' + span + body + '</td></tr>';
      });
      innerHtml += '</tbody>';

      const tableRoot = tooltipEl.querySelector('table');
      tableRoot.innerHTML = innerHtml;
    }

    // `this` will be the overall tooltip
    const position = chart.canvas.getBoundingClientRect();

    // Display, position, and set styles for font
    tooltipEl.style.opacity = '1';
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
    tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
    tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
    tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
    tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
    tooltipEl.style.backgroundColor = '#000';
    tooltipEl.style.pointerEvents = 'none';
  }
}
