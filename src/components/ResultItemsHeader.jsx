import React from 'react';

import '../../public/styles/ResultItemsHeader.postcss';

const SortSVG = ({ reverse }) =>
    reverse ? (
        <svg className="sort-svg" viewBox="0 0 612 612">
            <path d="M590.927,517.491H337.79c-11.645,0-21.095,9.45-21.095,21.116c0,11.665,9.45,21.115,21.095,21.115l253.137-0.611     c11.645,0,21.095-8.839,21.095-20.504C612.021,526.941,602.592,517.491,590.927,517.491z M295.601,52.88l295.326-0.042     c11.645,0,21.095-9.408,21.095-21.074s-9.45-21.116-21.095-21.116H295.601c-11.645,0-21.095,9.45-21.095,21.116     S283.956,52.88,295.601,52.88z M331.188,396.745c-8.27-8.312-21.686-8.312-29.955,0L190.127,524.6V10.648h-42.189v514.711     L36.156,396.745c-8.269-8.312-21.686-8.312-29.954,0c-8.27,8.312-8.27,21.77,0,30.06l146.439,168.526     c4.409,4.43,10.273,6.307,16.032,6.012c5.779,0.295,11.623-1.582,16.031-6.012l146.44-168.526     C339.457,418.515,339.457,405.057,331.188,396.745z M590.927,137.364H295.601c-11.645,0-21.095,9.451-21.095,21.116     c0,11.666,9.45,20.926,21.095,20.926h295.326c11.645,0,21.095-9.261,21.095-20.926     C612.021,146.815,602.592,137.364,590.927,137.364z M590.927,264.059H295.601c-11.645,0-21.095,9.451-21.095,21.116     c0,11.666,9.45,20.778,21.095,20.778l295.326,0.338c11.645,0,21.095-9.451,21.095-21.116     C612.021,273.531,602.592,264.059,590.927,264.059z M590.927,390.775H422.169c-11.645,0-21.095,9.45-21.095,21.115     c0,11.666,9.45,20.652,21.095,20.652h168.758c11.645,0,21.095-8.986,21.095-20.652     C612.021,400.226,602.592,390.775,590.927,390.775z" />
        </svg>
    ) : (
        <svg className="sort-svg" viewBox="0 0 612 612">
            <path d="M590.905,559.173H295.58c-11.644,0-21.095,9.408-21.095,21.073c0,11.666,9.451,21.116,21.095,21.116h295.326     c11.645,0,21.095-9.45,21.095-21.116C612,568.581,602.57,559.173,590.905,559.173z M331.166,215.266     c8.27-8.312,8.27-21.77,0-30.061L184.727,16.68c-4.409-4.43-10.273-6.308-16.032-6.012c-5.78-0.296-11.623,1.582-16.032,6.012     L6.202,185.185c-8.269,8.312-8.269,21.77,0,30.06c8.27,8.29,21.686,8.312,29.955,0L147.938,86.63v514.712h42.189V87.41     l111.105,127.855C309.48,223.556,322.896,223.556,331.166,215.266z M337.769,95.089h253.137c11.645,0,21.095-10.02,21.095-21.686     c0-11.665-9.45-21.115-21.095-21.115H337.769c-11.645,0-21.095,9.45-21.095,21.115C316.674,85.069,326.124,95.089,337.769,95.089     z M590.905,432.415H295.58c-11.644,0-21.095,9.45-21.095,21.115c0,11.666,9.451,21.116,21.095,21.116h295.326     c11.645,0,21.095-9.45,21.095-21.116C612,441.865,602.57,432.415,590.905,432.415z M590.905,305.698H295.58     c-11.644,0-21.095,9.451-21.095,21.116c0,11.666,9.451,21.116,21.095,21.116h295.326c11.645,0,21.095-9.45,21.095-21.116     C612,315.149,602.57,305.698,590.905,305.698z M590.905,178.982l-168.758,0.464c-11.645,0-21.095,8.986-21.095,20.652     c0,11.665,9.45,21.537,21.095,21.537l168.758-0.422c11.645,0,21.095-9.45,21.095-21.115     C612,188.433,602.57,178.982,590.905,178.982z" />
        </svg>
    );

export default class ResultItemsHeader extends React.PureComponent {
    sortResults = this.props.sortResults;

    sortBy = {
        ip: () => this.sortResults('ip'),
        port: () => this.sortResults('port'),
        protocols: () => this.sortResults('protocols'),
        anon: () => this.sortResults('anon'),
        country: () => this.sortResults('country'),
        blacklist: () => this.sortResults('blacklist'),
        keepAlive: () => this.sortResults('keep-alive'),
        server: () => this.sortResults('server'),
        timeout: () => this.sortResults('timeout')
    };

    render = () => {
        const { inBlacklists, captureServer, keepAlive, sorting } = this.props;

        return (
            <div className="result-list-header">
                <span className="count">
                    <svg className="count" viewBox="0 0 512 512">
                        <path d="M64,16C28.704,16,0,44.704,0,80s28.704,64,64,64s64-28.704,64-64S99.296,16,64,16z M64,112c-17.648,0-32-14.352-32-32    s14.352-32,32-32s32,14.352,32,32S81.648,112,64,112z" />
                        <path d="M64,192c-35.296,0-64,28.704-64,64s28.704,64,64,64s64-28.704,64-64C128,220.704,99.296,192,64,192z M64,288    c-17.648,0-32-14.352-32-32s14.352-32,32-32s32,14.352,32,32S81.648,288,64,288z" />
                        <path d="M64,368c-35.296,0-64,28.704-64,64c0,35.296,28.704,64,64,64s64-28.704,64-64C128,396.704,99.296,368,64,368z M64,464    c-17.648,0-32-14.352-32-32s14.352-32,32-32s32,14.352,32,32S81.648,464,64,464z" />
                        <rect x="192" y="32" width="96" height="32" />
                        <rect x="192" y="96" width="320" height="32" />
                        <rect x="192" y="208" width="96" height="32" />
                        <rect x="192" y="272" width="320" height="32" />
                        <rect x="192" y="384" width="96" height="32" />
                        <rect x="192" y="448" width="320" height="32" />
                    </svg>
                </span>
                <span className="main ip" onClick={this.sortBy.ip}>
                    <span>Ip</span>
                    <SortSVG {...sorting} />
                </span>
                <span className="main port" onClick={this.sortBy.port}>
                    <span>Port</span>
                    <SortSVG {...sorting} />
                </span>
                <span className="main protocols" onClick={this.sortBy.protocols}>
                    <span>Protocols</span>
                    <SortSVG {...sorting} />
                </span>
                <span className="main anon" onClick={this.sortBy.anon}>
                    <span>Anon</span>
                    <SortSVG {...sorting} />
                </span>
                <span className="main country" onClick={this.sortBy.country}>
                    <span>Country</span>
                    <SortSVG {...sorting} />
                </span>
                {inBlacklists && inBlacklists.filter(item => item.active).length > 0 ? (
                    <span className="blacklist" title="Blacklist" onClick={this.sortBy.blacklist}>
                        <svg viewBox="0 0 511.269 511.269">
                            <path d="M140.367,465.067C116.9,438.4,93.434,410.667,78.5,377.6c-14.933-35.2-19.2-75.733-11.733-114.133  s24.533-74.667,49.067-105.6c-2.133,26.667,7.467,54.4,25.6,74.667c-10.667-51.2,6.4-106.667,40.533-147.2S263.034,18.133,312.1,0  c-24.533,25.6-27.733,66.133-18.133,100.267c9.6,34.133,29.867,64,48,94.933c18.133,30.933,35.2,62.933,36.267,98.133  c9.6-18.133,20.267-36.267,26.667-56.533c6.4-20.267,9.6-41.6,4.267-61.867c19.2,23.467,29.867,46.933,35.2,76.8  c5.333,29.867,4.267,60.8,1.067,90.667c-4.267,33.067-12.8,67.2-30.933,94.933c-21.333,33.067-55.467,56.533-92.8,69.333  C255.567,518.4,190.5,508.8,140.367,465.067z" />
                            <path d="M221.434,504.533C308.9,538.667,395.3,435.2,347.3,355.2c0-1.067-1.067-1.067-1.067-2.133  c4.267,43.733-6.4,75.733-26.667,93.867c10.667-25.6,3.2-55.467-9.6-81.067c-12.8-24.533-30.933-46.933-44.8-70.4  c-13.867-24.533-24.533-52.267-18.133-80c-25.6,19.2-43.733,48-51.2,78.933c-7.467,30.933-3.2,65.067,10.667,93.867  c-16-11.733-27.733-30.933-28.8-51.2c-17.067,20.267-27.733,46.933-26.667,73.6C151.034,452.267,184.1,489.6,221.434,504.533z" />
                        </svg>
                    </span>
                ) : (
                    <span className="empty-blacklist-placeholder" />
                )}
                {keepAlive ? (
                    <span className="main k-a" title="Keep-Alive" onClick={this.sortBy.keepAlive}>
                        <svg className="k-a-svg" viewBox="0 0 58 58">
                            <path d="M10.38,8.106c1.562-1.143,3.776-1.024,5.185,0.385c1.556,1.556,1.556,4.101,0,5.657l-7.071,7.071   c-1.556,1.556-1.556,4.101,0,5.657s4.101,1.556,5.657,0l12.021-12.021c1.556-1.556,4.101-1.556,5.657,0   c1.556,1.556,1.556,4.101,0,5.657L15.565,36.775c-1.556,1.556-1.556,4.101,0,5.657c1.556,1.556,4.101,1.556,5.657,0l20.506-20.506   c1.556-1.556,4.101-1.556,5.657,0c1.556,1.556,1.556,4.101,0,5.657L33.243,41.725c-1.556,1.556-1.556,4.101,0,5.657   c1.556,1.556,4.101,1.556,5.657,0l4.95-4.95c1.556-1.556,4.101-1.556,5.657,0c1.409,1.409,1.528,3.623,0.385,5.185   c9.815-10.995,9.46-27.866-1.092-38.419C38.246-1.355,21.375-1.709,10.38,8.106z" />
                            <path d="M50.237,47.043c0.01-0.021,0.022-0.04,0.032-0.061c0.088-0.184,0.158-0.375,0.217-0.568   c0.013-0.042,0.026-0.084,0.037-0.126c0.048-0.177,0.081-0.357,0.104-0.538c0.008-0.066,0.014-0.133,0.019-0.199   c0.012-0.162,0.016-0.325,0.009-0.488c-0.004-0.092-0.015-0.183-0.026-0.274c-0.016-0.141-0.035-0.282-0.066-0.421   c-0.026-0.116-0.064-0.229-0.101-0.343c-0.037-0.115-0.07-0.23-0.117-0.342c-0.06-0.141-0.138-0.275-0.214-0.409   c-0.046-0.081-0.084-0.166-0.137-0.244c-0.141-0.21-0.301-0.411-0.487-0.597c-1.556-1.556-4.101-1.556-5.657,0l-0.707,0.707   l-4.243,4.243c-1.556,1.556-4.101,1.556-5.657,0c-1.556-1.556-1.556-4.101,0-5.657L46.678,28.29l0.707-0.707   c1.556-1.556,1.556-4.101,0-5.657c-1.556-1.556-4.101-1.556-5.657,0l-0.707,0.707L21.222,42.432c-1.556,1.556-4.101,1.556-5.657,0   c-1.556-1.556-1.556-4.101,0-5.657l15.556-15.556l0.707-0.707c1.556-1.556,1.556-4.101,0-5.657c-1.556-1.556-4.101-1.556-5.657,0   l-0.707,0.707L14.151,26.876c-1.556,1.556-4.101,1.556-5.657,0s-1.556-4.101,0-5.657l6.364-6.364l0.707-0.707   c1.556-1.556,1.556-4.101,0-5.657c-0.185-0.185-0.387-0.346-0.597-0.487c-0.078-0.053-0.163-0.09-0.244-0.137   c-0.134-0.077-0.268-0.154-0.409-0.214c-0.112-0.047-0.227-0.08-0.342-0.117c-0.114-0.037-0.228-0.075-0.344-0.101   c-0.139-0.031-0.279-0.049-0.42-0.065c-0.091-0.011-0.183-0.022-0.275-0.026c-0.163-0.007-0.325-0.004-0.488,0.009   c-0.067,0.005-0.133,0.011-0.199,0.019c-0.181,0.023-0.361,0.056-0.538,0.104c-0.042,0.011-0.084,0.025-0.126,0.037   C11.39,7.57,11.199,7.64,11.015,7.728c-0.021,0.01-0.041,0.022-0.061,0.032c-0.198,0.099-0.391,0.212-0.574,0.346   c-0.163,0.119-0.325,0.238-0.472,0.385L8.494,9.905c-0.08,0.08-0.138,0.173-0.21,0.258C-1.722,21.152-1.418,38.177,9.201,48.796   c10.619,10.619,27.644,10.923,38.633,0.918c0.085-0.072,0.178-0.13,0.258-0.21l1.414-1.414c0.147-0.147,0.266-0.309,0.385-0.472   C50.025,47.434,50.138,47.241,50.237,47.043z" />
                        </svg>
                    </span>
                ) : (
                    <span className="empty-keep-alive-placeholder" />
                )}
                {captureServer && (
                    <span className="main server" onClick={this.sortBy.server}>
                        <span>Server</span>
                        <SortSVG {...sorting} />
                    </span>
                )}
                <span className="main timeout" title="Timeout" onClick={this.sortBy.timeout}>
                    <svg viewBox="0 0 60 60">
                        <path d="M41.857,22.096C43.82,20.786,45,18.582,45,16.222V5H15v11.222c0,2.36,1.18,4.564,3.143,5.874  L28,28.667v2.667l-9.857,6.571C16.18,39.214,15,41.418,15,43.778V55h30V43.778c0-2.36-1.18-4.564-3.143-5.874L32,31.333v-2.667  L41.857,22.096z" />
                        <path d="M40.192,19.6C41.324,18.845,42,17.582,42,16.223v0c0-1.306-0.889-2.445-2.156-2.762L24.791,9.698  C21.342,8.835,18,11.444,18,15v1.223c0,1.359,0.676,2.622,1.808,3.377L29,26.346v15.877c0,3.63-3.764,6.036-7.058,4.511l0,0  c-1.774-0.821-3.922,0.394-3.941,2.349c0,0.014,0,0.027,0,0.041V55h24V43.777c0-0.014,0-0.027,0-0.041  c-0.019-1.931-1.889-3.322-3.791-2.991l-2.049,0.357C33.466,41.571,31,39.497,31,36.763V26.346L40.192,19.6z" />
                        <rect x="10" y="55" width="40" height="4" />
                        <path d="M54,58h-3v-4H9v4H6c-0.552,0-1,0.447-1,1s0.448,1,1,1h3h1h40h1h3c0.552,0,1-0.447,1-1  S54.552,58,54,58z M11,56h38v2H11V56z" />
                        <rect x="10" y="1" width="40" height="4" />
                        <path d="M54,0h-3h-1H10H9H6C5.448,0,5,0.447,5,1s0.448,1,1,1h3v4h42V2h3c0.552,0,1-0.447,1-1S54.552,0,54,0z   M49,4H11V2h38V4z" />
                        <path d="M24.999,24c-0.19,0-0.383-0.055-0.554-0.168l-4.638-3.092C18.676,19.986,18,18.724,18,17.362v-2.222  c0-0.553,0.448-1,1-1s1,0.447,1,1v2.222c0,0.69,0.343,1.331,0.917,1.714l4.638,3.092c0.459,0.307,0.583,0.927,0.277,1.387  C25.639,23.844,25.322,24,24.999,24z" />
                        <path d="M41,46c-0.552,0-1-0.447-1-1v-2.222c0-0.69-0.343-1.331-0.917-1.714l-4.638-3.092  c-0.459-0.307-0.583-0.927-0.277-1.387c0.307-0.46,0.926-0.584,1.387-0.277l4.638,3.092C41.324,40.154,42,41.417,42,42.778V45  C42,45.553,41.552,46,41,46z" />
                    </svg>
                </span>
            </div>
        );
    };
}
