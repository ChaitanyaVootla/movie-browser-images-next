export default function ConversionStats({ currentItemStats }:
    { currentItemStats: { totalOriginalSize: number, totalSize: number } }) {
  return (
    <table className="w-full border border-neutral-800 rounded-lg overflow-hidden text-sm">
        <thead className="bg-neutral-800 text-neutral-200">
            <tr>
                <th className="text-left px-4 py-2 font-semibold">Metric</th>
                <th className="text-left px-4 py-2 font-semibold">Values</th>
            </tr>
        </thead>
        <tbody className="bg-neutral-900 divide-y divide-neutral-800">
            <tr>
                <td className="px-4 py-2 text-neutral-200">Original Size</td>
                <td className="px-4 py-2 text-neutral-100 font-medium font-mono">
                    {currentItemStats.totalOriginalSize.toFixed(2)} KB
                </td>
            </tr>
            <tr>
                <td className="px-4 py-2 text-neutral-200">Converted Size</td>
                <td className="px-4 py-2 text-neutral-100 font-medium font-mono">
                    {currentItemStats.totalSize.toFixed(2)} KB
                </td>
            </tr>
            <tr>
                <td className="px-4 py-2 text-neutral-200 font-semibold">Size Reduction</td>
                <td className="px-4 py-2 text-green-400 font-bold font-mono">
                    {((1 - (currentItemStats.totalSize / currentItemStats.totalOriginalSize)) * 100).toFixed(2)} %
                </td>
            </tr>
        </tbody>
    </table>
  );
}
