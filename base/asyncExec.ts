import { ExecOptions, exec } from "child_process";

/**
 * asyncExec helper @do-lash
 * Suraj Mandal
 * surajmandal.in
 * env: nodejs
 */
/**
 * Exec command and return promise
 * @param cmd string
 * @param options - Options for the child process.
 * @returns Promise<Buffer>
 */
export default function asyncExec(
  cmd: string,
  options: ExecOptions
): Promise<Buffer | string> {
  return new Promise((resolve, reject) => {
    exec(cmd, options, (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);
      resolve(stdout);
    });
  });
}
