"use client"

import { useParams } from 'next/navigation';
import { componentsMap } from "@vectorcn/ui/componentsMap"

export default function PreviewPage() {
  const params = useParams();
  const category = Array.isArray(params.category) ? params.category[0] : params.category;
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  if (!category || !id) {
    return <p>Invalid parameters</p>;
  }

  const Component = componentsMap[category]?.[id];

  if (!Component) {
    return <p>Component not found for {category} / {id}</p>;
  }

  return (
    <div>
      <Component />
    </div>
  );
}