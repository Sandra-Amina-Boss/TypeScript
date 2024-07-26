import { jsonToReadableText } from "../helpers.js";
import {
    baselineTsserverLogs,
    openExternalProjectForSession,
    openFilesForSession,
    TestSession,
    toExternalFile,
} from "../helpers/tsserver.js";
import { createServerHost } from "../helpers/virtualFileSystemWithWatch.js";

describe("unittests:: tsserver:: typeAquisition:: autoDiscovery", () => {
    it("does not depend on extension", () => {
        const file1 = {
            path: "/user/username/projects/project/app.html",
            content: "",
        };
        const file2 = {
            path: "/user/username/projects/project/app.d.ts",
            content: "",
        };
        const host = createServerHost([file1, file2]);
        const session = new TestSession(host);
        openExternalProjectForSession({
            projectFileName: "/user/username/projects/project/proj.csproj",
            rootFiles: [toExternalFile(file2.path), { fileName: file1.path, hasMixedContent: true, scriptKind: "JS" }],
            options: {},
        }, session);
        const typeAcquisition = session.getProjectService().externalProjects[0].getTypeAcquisition();
        session.logger.log(`Typine acquisition should be enabled: ${typeAcquisition.enable}`);
        baselineTsserverLogs("typeAquisition", "does not depend on extension", session);
    });
});

describe("unittests:: tsserver:: typeAquisition:: prefer typings to js", () => {
    it("during second resolution pass", () => {
        const globalTypingsCacheLocation = "/a/globalcache/typings";
        const f1 = {
            path: "/user/username/projects/project/app.js",
            content: "var x = require('bar')",
        };
        const barjs = {
            path: "/user/username/projects/project/node_modules/bar/index.js",
            content: "export let x = 1",
        };
        const barTypings = {
            path: `${globalTypingsCacheLocation}/node_modules/@types/bar/index.d.ts`,
            content: "export let y: number",
        };
        const config = {
            path: "/user/username/projects/project/jsconfig.json",
            content: jsonToReadableText({ compilerOptions: { allowJs: true }, exclude: ["node_modules"] }),
        };
        const host = createServerHost([f1, barjs, barTypings, config]);
        const session = new TestSession({ host, globalTypingsCacheLocation });

        openFilesForSession([f1], session);

        baselineTsserverLogs("typeAquisition", "prefer typings in second pass", session);
    });
});
